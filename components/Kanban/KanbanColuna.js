
import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import { styles } from '../../Css/styleKanban.js';
import KanbanCartao from './KanbanCartao.js';

export default function KanbanColuna({
  col,
  cards,
  columnLayouts,
  isMobile,
  openModal,
  handleRemove,
  moveCard,
}) {
  return (
    <View
      ref={(node) => {
        if (!node) return;

        node.measureInWindow((x, y, width, height) => {
          columnLayouts.current[col.key] = {
            left: x,
            right: x + width,
            top: y,
            bottom: y + height,
          };
        });
      }}
      style={styles.column}
      collapsable={false}
    >
      <View style={styles.columnHeader}>
        <Text style={styles.columnTitle}>
          {col.label}
        </Text>

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
        {cards.map((card) => (
          <KanbanCartao
            key={card.id}
            card={card}
            columnKey={col.key}
            columnColor={col.color}
            columnLayouts={columnLayouts}
            isMobile={isMobile}
            openModal={openModal}
            handleRemove={handleRemove}
            moveCard={moveCard}
          />
        ))}
      </View>
    </View>
  );
}
