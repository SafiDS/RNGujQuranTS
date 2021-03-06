import {Platform, StyleSheet} from "react-native";
import { getColorScheme } from "../../../values/Colors";
import {FontSize} from "../../../values/GlobalStyles";

const Colors = getColorScheme();

export const splashStyles = StyleSheet.create({
    container: {
        height:'100%',
        backgroundColor: Colors.primary,
        justifyContent: "center",
        alignItems: "center",
    },
    appText: {
        color: Colors.textPrimary
    },
    imageContainer: {
        flex: 1,
        backgroundColor: Colors.secondary,
        paddingVertical: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    appVersion : {
        position:'absolute',
        bottom: 30,
        justifyContent:'center',
        alignItems:'center'
    },
    status: {
        fontSize: FontSize.text14,
        color: Colors.textPrimary,
        alignSelf: "center",
        opacity: 0.7,
        lineHeight: 21,
    },
    bottomContainer: {
        paddingBottom: Platform.OS === "android" ? 22 : 10,
    },
});
