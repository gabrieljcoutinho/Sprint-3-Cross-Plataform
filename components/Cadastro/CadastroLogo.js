import React from 'react';
import { View, Image } from 'react-native';

import { styles } from '../Css/styleCadastro';

export default function CadastroLogo() {
  return (
    <View style={styles.logoContainer}>
      <Image
        source={require('../../imgs/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}