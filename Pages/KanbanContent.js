
import React, { useState, useRef } from 'react';

import {
  View,
  ScrollView,
  Dimensions,
} from 'react-native';

import { styles } from '../Css/styleKanban.js';

import KanbanColuna from '../components/Kanban/KanbanColuna.js';
import KanbanModal from '../components/Kanban/KanbanModal.js';

import {
  columns,
  initialData,
  initialModalData,
} from '../components/Kanban/kanbanUtils.js';

const getIsMobile = () => Dimensions.get('window').width < 900;

export default function KanbanContent() {
  const [board, setBoard] = useState(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(getIsMobile);
  const columnLayouts = useRef({});

  const [modalData, setModalData] = useState(initialModalData);

  React.useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      ({ window }) => {
        setIsMobile(window.width < 900);
      }
    );

    return () => subscription?.remove();
  }, []);

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

    const { id, title, description, colKey } = modalData;

    if (id !== null) {
      setBoard((prev) => ({
        ...prev,
        [colKey]: prev[colKey].map((card) =>
          card.id === id
            ? {
                ...card,
                title: title.trim(),
                description,
              }
            : card
        ),
      }));
    } else {
      const newCard = {
        id: Date.now(),
        title: title.trim(),
        description,
      };

      setBoard((prev) => ({
        ...prev,
        [colKey]: [
          ...prev[colKey],
          newCard,
        ],
      }));
    }

    setIsModalOpen(false);
    setModalData(initialModalData);
  };

  const handleRemove = (colKey, cardId) => {
    setBoard((prev) => ({
      ...prev,
      [colKey]: prev[colKey].filter(
        (card) => card.id !== cardId
      ),
    }));
  };

  const moveCard = (from, to, card) => {
    if (from === to) return;

    setBoard((prev) => ({
      ...prev,
      [from]: prev[from].filter(
        (item) => item.id !== card.id
      ),
      [to]: [...prev[to], card],
    }));
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalData(initialModalData);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={!isMobile}
        contentContainerStyle={styles.board}
        showsHorizontalScrollIndicator={false}
      >
        {columns.map((col) => (
          <KanbanColuna
            key={col.key}
            col={col}
            cards={board[col.key]}
            columnLayouts={columnLayouts}
            isMobile={isMobile}
            openModal={openModal}
            handleRemove={handleRemove}
            moveCard={moveCard}
          />
        ))}
      </ScrollView>

      <KanbanModal
        visible={isModalOpen}
        modalData={modalData}
        setModalData={setModalData}
        onClose={closeModal}
        onSave={handleSave}
      />
    </View>
  );
}
