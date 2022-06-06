import React from "react";
import { LogBox } from "react-native";
import Store, { Persistor } from "./src/redux/Store";
import AppRouter from "./src/navigation/AppRouter";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

type PropTypes = {};

LogBox.ignoreAllLogs();

const App = (props: PropTypes) => {
  return (
      <Provider store={Store}>
        <PersistGate loading={null} persistor={Persistor}>
            <AppRouter props={props} />
        </PersistGate>
      </Provider>
  );
};

export default App;
