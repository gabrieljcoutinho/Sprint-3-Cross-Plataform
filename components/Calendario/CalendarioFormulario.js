import React from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { styles } from '../../Css/styleCalendario.js';
import { PRIORITIES } from './calendarioUtils.js';

export default function CalendarioFormulario({
  taskText,
  setTaskText,
  priority,
  setPriority,
  onSave,
  onCancel,
}) {
  return (
    <View>
      <TextInput
        placeholder="Digite sua tarefa..."
        value={taskText}
        onChangeText={setTaskText}
        multiline
        style={styles.taskInput}
        placeholderTextColor="#888"
      />

      <Text style={styles.priorityTitle}>
        Prioridade
      </Text>

      <View style={styles.priorityOptions}>
        {PRIORITIES.map((item) => (
          <TouchableOpacity
            key={item.value}
            onPress={() => setPriority(item.value)}
            style={[
              styles.priorityButton,
              {
                borderColor:
                  priority === item.value
                    ? item.color
                    : '#E5E5E5',
              },
            ]}
          >
            <View
              style={[
                styles.priorityIndicator,
                { backgroundColor: item.color },
              ]}
            />

            <Text style={styles.priorityLabel}>
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        onPress={onSave}
        style={styles.saveButton}
      >
        <Text style={styles.saveButtonText}>
          SALVAR TAREFA
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onCancel}
        style={styles.cancelButton}
      >
        <Text style={styles.cancelButtonText}>
          Cancelar
        </Text>
      </TouchableOpacity>
    </View>
  );
}