
import React, { useRef, useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  PanResponder,
} from 'react-native';

import { styles } from '../../Css/styleKanban.js';

export default function KanbanCartao({
  card,
  columnKey,
  columnColor,
  columnLayouts,
  isMobile,
  openModal,
  handleRemove,
  moveCard,
}) {
  const pan = useRef(new Animated.ValueXY()).current;
  const [isDragging, setIsDragging] = useState(false);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => false,

      onMoveShouldSetPanResponder: (_, gesture) =>
        Math.abs(gesture.dx) > 5 ||
        Math.abs(gesture.dy) > 5,

      onPanResponderGrant: () => {
        setIsDragging(true);
        pan.setOffset({ x: 0, y: 0 });
        pan.setValue({ x: 0, y: 0 });
      },

      onPanResponderMove: Animated.event(
        [null, { dx: pan.x, dy: pan.y }],
        { useNativeDriver: false }
      ),

      onPanResponderRelease: (event, gesture) => {
        const dropX =
          gesture.moveX ||
          gesture.x0 + gesture.dx ||
          event.nativeEvent.pageX;

        const dropY =
          gesture.moveY ||
          gesture.y0 + gesture.dy ||
          event.nativeEvent.pageY;

        let targetColumn = columnKey;

        Object.entries(columnLayouts.current).some(
          ([key, layout]) => {
            if (!layout) return false;

            const inside = isMobile
              ? dropY >= layout.top && dropY <= layout.bottom
              : dropX >= layout.left && dropX <= layout.right;

            if (inside) {
              targetColumn = key;
              return true;
            }

            return false;
          }
        );

        pan.flattenOffset();

        if (targetColumn !== columnKey) {
          moveCard(columnKey, targetColumn, card);
        }

        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start(() => {
          pan.setOffset({ x: 0, y: 0 });
          pan.setValue({ x: 0, y: 0 });
          setIsDragging(false);
        });
      },

      onPanResponderTerminate: () => {
        pan.flattenOffset();

        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start(() => {
          pan.setValue({ x: 0, y: 0 });
          setIsDragging(false);
        });
      },
    })
  ).current;

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[
        styles.card,
        {
          transform: pan.getTranslateTransform(),
          zIndex: isDragging ? 999 : 1,
          elevation: isDragging ? 999 : 1,
          opacity: isDragging ? 0.9 : 1,
        },
      ]}
    >
      <View style={styles.cardTop}>
        <View
          style={[
            styles.cardStatus,
            { backgroundColor: columnColor },
          ]}
        />

        <View style={styles.actions}>
          <TouchableOpacity
            onPress={() => openModal(columnKey, card)}
            accessibilityLabel="Editar tarefa"
          >
            <Text style={styles.edit}>✎</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleRemove(columnKey, card.id)}
            accessibilityLabel="Excluir tarefa"
          >
            <Text style={styles.delete}>✕</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.cardTitle}>{card.title}</Text>

      {!!card.description && (
        <Text style={styles.cardDesc}>
          {card.description}
        </Text>
      )}
    </Animated.View>
  );
}
