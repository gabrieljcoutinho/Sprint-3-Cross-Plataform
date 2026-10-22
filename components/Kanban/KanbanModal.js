
import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';

import { styles } from '../../Css/styleKanban.js';

export default function KanbanModal({
  visible,
  modalData,
  setModalData,
  onClose,
  onSave,
}) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
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
              setModalData((prev) => ({
                ...prev,
                title,
              }))
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
              onPress={onClose}
            >
              <Text>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.saveButton}
              onPress={onSave}
            >
              <Text style={styles.saveButtonText}>
                Salvar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
