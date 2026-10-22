import React from 'react';
import { View, Text } from 'react-native';

import { styles } from '../../Css/styleCalendario.js';

export default function CalendarioCabecalho({ month, year }) {
  return (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <Text style={styles.monthTitle}>{month}</Text>
        <Text style={styles.yearTitle}>{year}</Text>
      </View>
    </View>
  );
}