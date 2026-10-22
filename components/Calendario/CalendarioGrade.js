import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import { styles } from '../../Css/styleCalendario.js';

import {
  DAYS,
  getPriorityColor,
  getHighestPriority,
} from './calendarioUtils.js';

const { width } = Dimensions.get('window');

export default function CalendarioGrade({
  calendar,
  today,
  tasks,
  onSelectDay,
}) {
  return (
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
                onPress={() => onSelectDay(day)}
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
  );
}