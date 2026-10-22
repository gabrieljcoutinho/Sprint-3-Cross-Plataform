import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import { styles } from '../../Css/styleCalendario.js';

import {
  getPriorityColor,
} from './calendarioUtils.js';

import CalendarioFormulario from './CalendarioFormulario.js';

export default function CalendarioTarefas({
  selectedDay,
  selectedTasks,
  editing,
  setEditing,
  taskText,
  setTaskText,
  priority,
  setPriority,
  saveTask,
  cancelEditing,
}) {
  return (
    <View style={styles.taskSection}>
      <Text style={styles.taskTitle}>
        Dia {selectedDay}
      </Text>

      <View style={styles.taskCard}>
        {selectedTasks.length === 0 && !editing && (
          <TouchableOpacity onPress={() => setEditing(true)}>
            <Text style={styles.emptyTaskText}>
              Clique aqui para escrever alguma tarefa
            </Text>
          </TouchableOpacity>
        )}

        {selectedTasks.map((task) => (
          <View
            key={task.id}
            style={[
              styles.taskItem,
              {
                borderLeftColor: getPriorityColor(task.priority),
              },
            ]}
          >
            <Text style={styles.taskText}>
              {task.text}
            </Text>
          </View>
        ))}

        {selectedTasks.length > 0 && !editing && (
          <TouchableOpacity
            onPress={() => setEditing(true)}
            style={styles.addTaskButton}
          >
            <Text style={styles.addTaskText}>
              + Adicionar outra tarefa
            </Text>
          </TouchableOpacity>
        )}

        {editing && (
          <CalendarioFormulario
            taskText={taskText}
            setTaskText={setTaskText}
            priority={priority}
            setPriority={setPriority}
            onSave={saveTask}
            onCancel={cancelEditing}
          />
        )}
      </View>
    </View>
  );
}