import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
  Dimensions,
  PanResponder,
  Animated,
} from 'react-native';

import { styles } from '../Css/styleKanban';

const { width } = Dimensions.get('window');
const isMobile = width < 900;

const columns = [
  { key: 'backlog', label: 'BACKLOG', color: '#7C3AED' },
  { key: 'fazer', label: 'FAZER', color: '#EF4444' },
  { key: 'doing', label: 'FAZENDO', color: '#F59E0B' },
  { key: 'completed', label: 'COMPLETO', color: '#10B981' },
];

const initialData = {
  backlog: [],
  fazer: [],
  doing: [],
  completed: [],
};

export default function KanbanContent() {
  const [board, setBoard] = useState(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const columnLayouts = useRef({});

  const [modalData, setModalData] = useState({
    id: null,
    title: '',
    description: '',
    colKey: '',
  });

  const openModal = (colKey, card = null) => {
    setModalData({
      id: card?.id ?? null,
      title: card?.title ?? '',
      description: card?.description ?? '',
      colKey,
    });

    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (!modalData.title.trim()) return;

    if (modalData.id) {
      setBoard((prev) => ({
        ...prev,
        [modalData.colKey]: prev[modalData.colKey].map((card) =>
          card.id === modalData.id
            ? {
                ...card,
                title: modalData.title.trim(),
                description: modalData.description,
              }
            : card
        ),
      }));
    } else {
      const newCard = {
        id: Date.now(),
        title: modalData.title.trim(),
        description: modalData.description,
      };

      setBoard((prev) => ({
        ...prev,
        [modalData.colKey]: [
          ...prev[modalData.colKey],
          newCard,
        ],
      }));
    }

    setIsModalOpen(false);
  };

  const handleRemove = (colKey, cardId) => {
    setBoard((prev) => ({
      ...prev,
      [colKey]: prev[colKey].filter((card) => card.id !== cardId),
    }));
  };

  const moveCard = (from, to, card) => {
    if (from === to) return;

    setBoard((prev) => ({
      ...prev,
      [from]: prev[from].filter((item) => item.id !== card.id),
      [to]: [...prev[to], card],
    }));
  };

  const measureColumn = (key, node) => {
    if (!node) return;

    setTimeout(() => {
      node.measure((x, y, columnWidth, height, pageX, pageY) => {
        columnLayouts.current[key] = {
          left: pageX,
          right: pageX + columnWidth,
          top: pageY,
          bottom: pageY + height,
        };
      });
    }, 150);
  };

  const DraggableCard = ({ card, columnKey, columnColor }) => {
    const pan = useRef(new Animated.ValueXY()).current;
    const [isDragging, setIsDragging] = useState(false);
    const offsetRef = useRef({ x: 0, y: 0 });

    const panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (_, gesture) =>
        Math.abs(gesture.dx) > 2 || Math.abs(gesture.dy) > 2,

      onPanResponderGrant: () => {
        setIsDragging(true);

        pan.setOffset({
          x: offsetRef.current.x,
          y: offsetRef.current.y,
        });

        pan.setValue({ x: 0, y: 0 });
      },

      onPanResponderMove: Animated.event(
        [null, { dx: pan.x, dy: pan.y }],
        { useNativeDriver: false }
      ),

      onPanResponderRelease: (event, gestureState) => {
        offsetRef.current.x += gestureState.dx;
        offsetRef.current.y += gestureState.dy;

        pan.flattenOffset();

        const dropX =
          gestureState.moveX ||
          gestureState.absoluteX ||
          event.nativeEvent.pageX;

        const dropY =
          gestureState.moveY ||
          gestureState.absoluteY ||
          event.nativeEvent.pageY;

        let targetColumn = columnKey;

        for (const key of Object.keys(columnLayouts.current)) {
          const layout = columnLayouts.current[key];

          if (!layout) continue;

          if (isMobile) {
            if (dropY >= layout.top && dropY <= layout.bottom) {
              targetColumn = key;
              break;
            }
          } else if (
            dropX >= layout.left &&
            dropX <= layout.right
          ) {
            targetColumn = key;
            break;
          }
        }

        if (targetColumn !== columnKey) {
          offsetRef.current = { x: 0, y: 0 };
          pan.setValue({ x: 0, y: 0 });

          moveCard(columnKey, targetColumn, card);
          setIsDragging(false);
        } else {
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
          }).start(() => {
            offsetRef.current = { x: 0, y: 0 };
            setIsDragging(false);
          });
        }
      },
    });

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
          <Text style={styles.cardDesc}>{card.description}</Text>
        )}
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={!isMobile}
        contentContainerStyle={styles.board}
        showsHorizontalScrollIndicator={false}
      >
        {columns.map((col) => (
          <View
            key={col.key}
            ref={(node) => measureColumn(col.key, node)}
            style={styles.column}
          >
            <View style={styles.columnHeader}>
              <Text style={styles.columnTitle}>{col.label}</Text>

              <TouchableOpacity
                style={[
                  styles.addButton,
                  { backgroundColor: col.color },
                ]}
                onPress={() => openModal(col.key)}
                accessibilityLabel={`Adicionar tarefa em ${col.label}`}
              >
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.cardsContainer}>
              {board[col.key].map((card) => (
                <DraggableCard
                  key={card.id}
                  card={card}
                  columnKey={col.key}
                  columnColor={col.color}
                />
              ))}
            </View>
          </View>
        ))}
      </ScrollView>

      <Modal
        visible={isModalOpen}
        transparent
        animationType="fade"
        onRequestClose={() => setIsModalOpen(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>
              {modalData.id ? 'Editar' : 'Nova tarefa'}
            </Text>

            <TextInput
              placeholder="Título"
              value={modalData.title}
              onChangeText={(title) =>
                setModalData((prev) => ({ ...prev, title }))
              }
              style={styles.input}
              accessibilityLabel="Título da tarefa"
              maxLength={120}
            />

            <TextInput
              placeholder="Descrição"
              value={modalData.description}
              onChangeText={(description) =>
                setModalData((prev) => ({
                  ...prev,
                  description,
                }))
              }
              style={styles.textarea}
              multiline
              textAlignVertical="top"
              accessibilityLabel="Descrição da tarefa"
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setIsModalOpen(false)}
              >
                <Text>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.saveButton}
                onPress={handleSave}
              >
                <Text style={styles.saveButtonText}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}