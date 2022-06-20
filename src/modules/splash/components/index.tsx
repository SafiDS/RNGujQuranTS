import React  from 'react'
import { Text, View } from 'react-native';
import { splashStyles as styles } from "../styles/splashStyles";
import SafeArea from "../../../components/SafeArea";
import { getColorScheme } from "../../../values/Colors";
import Icon from "../../../utils/Icons";
import {FontName} from "../../../utils/Constant";
import DeviceInfo from 'react-native-device-info';
import {Strings} from "../../../values/Strings";

let readableVersion = DeviceInfo.getVersion();

const Colors = getColorScheme();

const Splash = () => {
    return (
        <SafeArea
            statusBarColor={Colors.lightPrimary}
            backgroundColor={Colors.lightPrimary}
            bottomBarColor={Colors.lightPrimary}
            statusBarStyle={'light-content'}
        >
        <View style={styles.container}>
            <Icon name="quran" type={FontName.FontAwesome5} size={150} color={'#FFF'} />
            <View style={styles.appVersion}>
                <Text style={styles.appText}>
                    {`${Strings.appVersion} : ${readableVersion}`}
                </Text>
            </View>
        </View>
        </SafeArea>
    )
};

export default Splash;
