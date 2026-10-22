import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import { styles } from '../Css/styleCadastro';

export default function CadastroFooter({ goToLogin }) {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        Já tem conta?
      </Text>

      <TouchableOpacity onPress={goToLogin}>
        <Text style={styles.link}>
          Entrar
        </Text>
      </TouchableOpacity>
    </View>
  );
}