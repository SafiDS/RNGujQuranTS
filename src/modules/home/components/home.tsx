import React, {useEffect, useState}  from 'react'
import { Text, View, useColorScheme } from 'react-native';
import { homeStyles as styles } from "../styles/homeStyles";
import SafeArea from "../../../components/SafeArea";
import { getColorScheme } from "../../../values/Colors";


type PropsType = {
    updateStatus: number;
    progress: number;
    navigation: any;
    commonState: any;
    loginState: any;
    setErrorConfig: Function;
    setColorScheme: Function;
    setSession: Function;
    setSelectedHomeTab: Function;
};

const Colors = getColorScheme();

const Home = (props: PropsType) => {

    return (
        <SafeArea
            statusBarColor={Colors.primary}
            backgroundColor={Colors.primary}
            bottomBarColor={Colors.primary}
            statusBarStyle={'light-content'}
        >
            <View style={styles.container}>
                <View style={styles.appVersion}>
                    <Text style={styles.appText}>
                        {'Home'}
                    </Text>
                </View>
            </View>
        </SafeArea>
    )
};

export default Home;
