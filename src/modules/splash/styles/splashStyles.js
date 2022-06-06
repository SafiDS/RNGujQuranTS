import Colors from "../../../values/Colors";
import { StyleSheet } from "react-native";

export const splashStyles = StyleSheet.create({
    container: {
        flex: 1,
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
