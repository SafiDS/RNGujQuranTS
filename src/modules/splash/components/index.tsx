import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { splashStyles as styles } from "../styles/splashStyles";
import SafeArea from "../../../components/SafeArea";
import { getColorScheme } from "../../../values/Colors";

const Colors = getColorScheme();

const Splash = () => {
    return (
        <SafeArea
            statusBarColor={Colors.primary}
            backgroundColor={Colors.primary}
            bottomBarColor={Colors.primary}
            statusBarStyle={'light-content'}
        >
        <View style={styles.container}>

        </View>
        </SafeArea>
    )
};

export default Splash;
