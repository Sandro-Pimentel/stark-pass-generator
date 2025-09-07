import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

import styles from "./HomeStyles";

import { Logo } from "../../components/Logo/Logo";
import { ButtonGroup } from "../../components/GroupButton/ButtonGroup";

export default function Home() {
    return (
        <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
                <Logo/>
            </View>
            <View style={styles.inputContainer}>
                <ButtonGroup/>
            </View>
            <StatusBar style="light"/>
        </View>
    );
}
