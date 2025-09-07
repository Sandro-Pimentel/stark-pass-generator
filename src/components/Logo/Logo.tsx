import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './LogoStyles';

const ironManLogo = require('../../../assets/iron-man-logo.png'); 

export function Logo() {
  return (
    <>
        <Text style={styles.title}>
            STARK PASS GENERATOR
        </Text>
        <Image 
            source={ironManLogo}
            style={styles.image}
        />
    </>
  );
}