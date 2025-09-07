import React, { useRef, useState } from 'react';
import { Text, Pressable, TextInput } from 'react-native';
import * as Clipboard from 'expo-clipboard';

import { styles } from './ButtonGroupStyles';
import { PassInput } from '../PassInput/PassInput';

import generatePass from '../../services/passwordService';

export function ButtonGroup() {
    const [pass, setPass] = useState('pass');

    function handleGenerateButton() {
        let generatedPass = generatePass();
        setPass(generatedPass);
    }

    function handleCopyButton() {
        Clipboard.setStringAsync(pass);
    }

    return (
        <>
            <PassInput 
                pass={pass}
            />
            
            <Pressable
                style={styles.button}
                onPress={handleGenerateButton}
            >
                <Text style={styles.text}> GENERATE </Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={handleCopyButton}
            >
                <Text style={styles.text}> COPY </Text>
            </Pressable>
        </>
    );
}