import { StyleSheet } from "react-native";
import { getColorScheme } from "../../../values/Colors";

const Colors = getColorScheme();

export const homeStyles = StyleSheet.create({
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
    }
});
