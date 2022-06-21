import React from "react";
import { LogBox } from "react-native";
import Store, { Persistor } from "./src/redux/Store";
import AppRouter from "./src/navigation/AppRouter";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import codePush from "react-native-code-push";
import CodePushProvider from "./src/components/CodePushProvider";


type PropTypes = {};

LogBox.ignoreAllLogs();

const App = (props: PropTypes) => {


  return (
      <Provider store={Store}>
        <PersistGate loading={null} persistor={Persistor}>
            <CodePushProvider>
            <AppRouter props={props} />
            </CodePushProvider>
        </PersistGate>
      </Provider>
  );
};

export default codePush(App);
