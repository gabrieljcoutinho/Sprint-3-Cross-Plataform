import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';

import CadastroInput from './CadastroInput.js';

import { styles } from '../Css/styleCadastro';

export default function CadastroFormulario({ goToLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const mostrarAlerta = (titulo, mensagem, callback) => {
    if (Platform.OS === 'web') {
      window.alert(`${titulo}: ${mensagem}`);

      if (callback) {
        callback();
      }

      return;
    }

    Alert.alert(titulo, mensagem, [
      {
        text: 'OK',
        onPress: callback,
      },
    ]);
  };

  const handleCadastro = () => {
    if (!email.trim() || !password || !confirmPassword) {
      mostrarAlerta(
        'Erro',
        'Preencha todos os campos.'
      );
      return;
    }

    if (password !== confirmPassword) {
      mostrarAlerta(
        'Erro',
        'As senhas não coincidem.'
      );
      return;
    }

    mostrarAlerta(
      'Sucesso',
      'Cadastro realizado com sucesso!',
      goToLogin
    );
  };

  return (
    <View>
      <CadastroInput
        label="Email:"
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <CadastroInput
        label="Senha:"
        placeholder="Digite sua senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <CadastroInput
        label="Confirmar Senha:"
        placeholder="Confirme sua senha"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleCadastro}
      >
        <Text style={styles.buttonText}>
          CADASTRAR
        </Text>
      </TouchableOpacity>
    </View>
  );
}