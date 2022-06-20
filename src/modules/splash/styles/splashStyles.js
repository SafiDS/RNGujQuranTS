import { StyleSheet } from "react-native";
import { getColorScheme } from "../../../values/Colors";

const Colors = getColorScheme();

export const splashStyles = StyleSheet.create({
    container: {
        height:'100%',
        backgroundColor: Colors.primary,
    },
    image: {
        width: 360,
        height: "100%",
    },
    imageContainer: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingVertical: 20,
        justifyContent: "center",
        alignItems: "center",
    },
});
