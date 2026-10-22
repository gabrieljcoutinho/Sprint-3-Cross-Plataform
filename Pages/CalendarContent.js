
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';

import { styles } from '../Css/styleCalendario.js';

const { width } = Dimensions.get('window');

const MONTHS = [
  'JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL',
  'MAIO', 'JUNHO', 'JULHO', 'AGOSTO',
  'SETEMBRO', 'OUTUBRO', 'NOVEMBRO', 'DEZEMBRO',
];

const DAYS = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'];

const PRIORITIES = [
  { label: 'Baixa', value: 'low', color: '#22C55E' },
  { label: 'Média', value: 'medium', color: '#FACC15' },
  { label: 'Máxima', value: 'high', color: '#EF4444' },
];

const getPriorityColor = (priority) => {
  const colors = {
    low: '#22C55E',
    medium: '#FACC15',
    high: '#EF4444',
  };

  return colors[priority] || colors.low;
};

const getHighestPriority = (tasks) => {
  if (!tasks?.length) return null;

  if (tasks.some((task) => task.priority === 'high')) {
    return 'high';
  }

  if (tasks.some((task) => task.priority === 'medium')) {
    return 'medium';
  }

  return 'low';
};

const createCalendar = (year, month) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  const calendar = [];
  let week = [];

  for (let i = 0; i < firstDay; i++) {
    week.push('');
  }

  for (let day = 1; day <= daysInMonth; day++) {
    week.push(day);

    if (week.length === 7) {
      calendar.push(week);
      week = [];
    }
  }

  while (week.length > 0 && week.length < 7) {
    week.push('');
  }

  if (week.length) calendar.push(week);

  return calendar;
};

export default function CalendarContent() {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const today = currentDate.getDate();

  const [selectedDay, setSelectedDay] = useState(null);
  const [tasks, setTasks] = useState({});
  const [editing, setEditing] = useState(false);
  const [taskText, setTaskText] = useState('');
  const [priority, setPriority] = useState('low');

  const calendar = createCalendar(currentYear, currentMonth);

  const handleSelectDay = (day) => {
    if (!day) return;

    setSelectedDay(day);
    setTaskText('');
    setPriority('low');
    setEditing(false);
  };

  const saveTask = () => {
    if (!taskText.trim() || !selectedDay) return;

    const newTask = {
      id: Date.now(),
      text: taskText.trim(),
      priority,
    };

    setTasks((previousTasks) => ({
      ...previousTasks,
      [selectedDay]: [
        ...(previousTasks[selectedDay] || []),
        newTask,
      ],
    }));

    setTaskText('');
    setPriority('low');
    setEditing(false);
  };

  const selectedTasks = tasks[selectedDay] || [];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* CABEÇALHO */}
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.monthTitle}>
            {MONTHS[currentMonth]}
          </Text>

          <Text style={styles.yearTitle}>
            {currentYear}
          </Text>
        </View>
      </View>

      {/* CALENDÁRIO */}
      <View style={styles.calendar}>
        <View style={styles.weekHeader}>
          {DAYS.map((day) => (
            <View key={day} style={styles.weekDay}>
              <Text
                style={[
                  styles.weekDayText,
                  { fontSize: width < 400 ? 10 : 11 },
                ]}
              >
                {day}
              </Text>
            </View>
          ))}
        </View>

        {calendar.map((week, weekIndex) => (
          <View key={weekIndex} style={styles.weekRow}>
            {week.map((day, dayIndex) => {
              const isToday = day === today;
              const dayTasks = tasks[day];
              const highestPriority = getHighestPriority(dayTasks);

              return (
                <TouchableOpacity
                  key={dayIndex}
                  activeOpacity={0.8}
                  disabled={!day}
                  onPress={() => handleSelectDay(day)}
                  style={[
                    styles.dayCell,
                    !day && styles.emptyDay,
                    isToday && styles.todayCell,
                  ]}
                >
                  <Text
                    style={[
                      styles.dayText,
                      isToday && styles.todayText,
                    ]}
                  >
                    {day}
                  </Text>

                  {highestPriority && (
                    <View
                      style={[
                        styles.priorityDot,
                        {
                          backgroundColor:
                            getPriorityColor(highestPriority),
                        },
                      ]}
                    />
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </View>

      {/* TAREFAS DO DIA */}
      {selectedDay !== null && (
        <View style={styles.taskSection}>
          <Text style={styles.taskTitle}>
            Dia {selectedDay}
          </Text>

          <View style={styles.taskCard}>
            {selectedTasks.length === 0 && !editing && (
              <TouchableOpacity
                onPress={() => setEditing(true)}
              >
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
                    borderLeftColor:
                      getPriorityColor(task.priority),
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

            {/* FORMULÁRIO */}
            {editing && (
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
                  onPress={saveTask}
                  style={styles.saveButton}
                >
                  <Text style={styles.saveButtonText}>
                    SALVAR TAREFA
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    setEditing(false);
                    setTaskText('');
                    setPriority('low');
                  }}
                  style={styles.cancelButton}
                >
                  <Text style={styles.cancelButtonText}>
                    Cancelar
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      )}
    </ScrollView>
  );
}
