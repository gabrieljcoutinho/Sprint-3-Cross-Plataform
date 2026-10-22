import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import { styles } from '../Css/styleCalendario.js';

import CalendarioCabecalho from '../components/Calendario/CalendarioCabecalho.js';
import CalendarioGrade from '../components/Calendario/CalendarioGrade.js';
import CalendarioTarefas from '../components/Calendario/CalendarioTarefas.js';

import {
  MONTHS,
  createCalendar,
} from '../components/Calendario/calendarioUtils.js';

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

  const cancelEditing = () => {
    setEditing(false);
    setTaskText('');
    setPriority('low');
  };

  const selectedTasks = selectedDay
    ? tasks[selectedDay] || []
    : [];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <CalendarioCabecalho
        month={MONTHS[currentMonth]}
        year={currentYear}
      />

      <CalendarioGrade
        calendar={calendar}
        today={today}
        tasks={tasks}
        onSelectDay={handleSelectDay}
      />

      {selectedDay !== null && (
        <CalendarioTarefas
          selectedDay={selectedDay}
          selectedTasks={selectedTasks}
          editing={editing}
          setEditing={setEditing}
          taskText={taskText}
          setTaskText={setTaskText}
          priority={priority}
          setPriority={setPriority}
          saveTask={saveTask}
          cancelEditing={cancelEditing}
        />
      )}
    </ScrollView>
  );
}