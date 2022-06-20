import { StyleSheet } from "react-native";
import { getColorScheme } from "../../../values/Colors";

const Colors = getColorScheme();

export const splashStyles = StyleSheet.create({
    container: {
        height:'100%',
        backgroundColor: Colors.black,
        justifyContent: "center",
        alignItems: "center",
    },
    appText: {
        color: Colors.textPrimary
    },
    imageContainer: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingVertical: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    appVersion : {
        position:'absolute',
        bottom: 30,
        justifyContent:'center',
        alignItems:'center'
    }
});
