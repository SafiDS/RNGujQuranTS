import React, {Fragment, ReactNode, useEffect, useRef} from "react";
import { View, SafeAreaView, StatusBar } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { getColorScheme } from "../values/Colors";
import { connect } from "react-redux";
const Colors = getColorScheme();

type PropsType = {
    translucentStatusBar?: boolean;
    statusBarColor?: string;
    statusBarStyle?: string;
    statusBarHidden?: boolean;
    bottomBarColor?: string;
    backgroundColor?: string;
    children?: ReactNode;
    noStatusBar?: boolean;
    commonState?: any;
};

const SafeArea = (props: PropsType) => {
    const {
        translucentStatusBar = false,
        statusBarColor = Colors.black,
        statusBarStyle = "dark-content",
        bottomBarColor,
        backgroundColor = Colors.black,
        statusBarHidden = false,
        children = null,
        noStatusBar = false,
        commonState,
    } = props;


    return (
        <>
            {!noStatusBar && (
                <StatusBar
                    translucent={translucentStatusBar}
                    backgroundColor={statusBarColor}
                    barStyle={statusBarStyle || ""}
                    hidden={statusBarHidden}
                    animated={true}
                />
            )}
            <SafeAreaView
                style={[
                    styles.safeAreaTop,
                    {
                        backgroundColor: statusBarColor,
                    },
                ]}
            />
            <SafeAreaView
                style={[
                    styles.safeAreaBottom,
                    {
                        backgroundColor: bottomBarColor ? bottomBarColor : backgroundColor,
                    },
                ]}
            >
                <View
                    style={[
                        styles.container,
                        { backgroundColor: backgroundColor },
                    ]}
                >
                    {children}
                </View>
            </SafeAreaView>
        </>
    );
};

const mapStateToProps = (state: any) => {
    return {
        commonState: state.commonReducer,
    };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SafeArea);

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.black,
    },
    safeAreaTop: {
        flex: 0,
    },
    safeAreaBottom: {
        flex: 1,
    },
});
