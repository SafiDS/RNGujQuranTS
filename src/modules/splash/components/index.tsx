import React, {useEffect, useState}  from 'react'
import { Text, View, useColorScheme } from 'react-native';
import { splashStyles as styles } from "../styles/splashStyles";
import SafeArea from "../../../components/SafeArea";
import { getColorScheme } from "../../../values/Colors";
import Icon from "../../../utils/Icons";
import {FontName} from "../../../utils/Constant";
import {changeLanguage, Strings} from "../../../values/Strings";
import { useCodePush } from "../../../components/CodePushProvider";
import { useNetInfo } from "@react-native-community/netinfo";
import CodePush from "react-native-code-push";
import {getCodePushStatusText, resetNavigationStack} from "../../../utils/Utils";
import {getUserSession} from "../../../utils/LocalStorage";
import {Screens} from "../../../values/Constants";
import {setColorScheme} from "../../commons/Actions";
import {setSession} from "../../home/Actions";
import {connect} from "react-redux";


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

const Splash = (props: PropsType) => {

    const [animationComplete, setAnimationComplete] = useState<boolean>(false);

    const { progress, updateStatus } = useCodePush();
    const systemColorScheme = useColorScheme();

    const { navigation, commonState } = props;
    const netInfo = useNetInfo();

    useEffect(() => {
        setTimeout(() => {
            setAnimationComplete(true);
        }, 2000);

        if (
            updateStatus === CodePush.SyncStatus.UP_TO_DATE ||
            updateStatus === CodePush.SyncStatus.UPDATE_INSTALLED
        ) {
            setTimeout(() => checkForUserLogin(navigation, props), 400);
        } else if (updateStatus === CodePush.SyncStatus.UNKNOWN_ERROR) {
            checkForUserLogin(navigation, props);
        }

        if (
            commonState.colorScheme === null &&
            commonState.colorScheme !== systemColorScheme
        ) {
            props.setColorScheme(systemColorScheme);
        }
    }, [updateStatus, animationComplete]);

    const getMessage = (updateStatus: number, progress: number, netInfo: any) => {
        if (netInfo.isConnected && netInfo.isConnected === true) {
            if (updateStatus === CodePush.SyncStatus.DOWNLOADING_PACKAGE) {
                getCodePushStatusText(updateStatus) + "-" + progress;
            } else {
                return getCodePushStatusText(updateStatus);
            }
        } else {
            return "noInternet";
        }
    };

    const checkForUserLogin = async (navigation: any, props: PropsType) => {
        const session = await getUserSession();
        console.log("session of user",session);
        if (session) {
            props.setSession(session);
            try {
                changeLanguage(session.language);
            } catch (e) {
                console.log("Localization Error", e);
            }
            if (animationComplete) {
                    resetNavigationStack(navigation, Screens.HOME);
            }
        } else {
            if (animationComplete) createNewSessionAndNavigate(session);
        }
    };


    const createNewSessionAndNavigate = (session: any) => {
        let newSession = {
            language: session ? session.language : "en",
            theme: session ? session.theme : "light",
        };
        props.setSession(newSession);
        resetNavigationStack(navigation, Screens.HOME);
    };

    return (
        <SafeArea
            statusBarColor={Colors.secondary}
            backgroundColor={Colors.secondary}
            bottomBarColor={Colors.secondary}
            statusBarStyle={'light-content'}
        >
        <View style={styles.container}>
            <Icon name="quran" type={FontName.FontAwesome5} size={150} color={Colors.secondary} />
            <View style={styles.bottomContainer}>
                <Text style={styles.status}>
                    {Strings[getMessage(updateStatus, progress, netInfo)]}
                </Text>
            </View>
        </View>
        </SafeArea>
    )
};

const mapStateToProps = (state: any) => {
    return {
        commonState: state.commonReducer,
        loginState: state.homeReducer,
    };
};

const mapDispatchToProps = {
    setColorScheme,
    setSession,
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
