import CodePush from "react-native-code-push";
import { CommonActions } from "@react-navigation/native";

export const getCodePushStatusText = (status: any) => {
    console.log(status, "status")
    console.log(CodePush.SyncStatus.SYNC_IN_PROGRESS, "SyncStatus.SYNC_IN_PROGRESS")
    switch (status) {
        case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
            return "checkUpdate";
        case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
            return "downloadingUpdate";
        case CodePush.SyncStatus.INSTALLING_UPDATE:
            return "installingUpdate";
        case CodePush.SyncStatus.UP_TO_DATE:
            return "upToDate";
        case CodePush.SyncStatus.UPDATE_INSTALLED:
            return "upDateInstalled";
        case CodePush.SyncStatus.SYNC_IN_PROGRESS:
            return "syncInProgress";
    }
};

export const resetNavigationStack = (
    navigation: any,
    screen: any,
    params?: any
) => {
    navigation.dispatch(
        CommonActions.reset({
            index: 0,
            routes: [{ name: screen, params: params }],
        })
    );
};

export const FontSize = {
    text32: '32rem',
    text26: '26rem',
    text24: '24rem',
    text22: '22rem',
    text20: '20rem',
    text18: '18rem',
    text16: '16rem',
    text14: '14rem',
    text12: '12rem',
    text10: '10rem',
};
