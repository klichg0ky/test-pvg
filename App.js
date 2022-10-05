import React from "react";
import { Provider } from "react-native-paper";
import { AppNavigator } from "./navigation/AppNavigator";

const App = () => (
  <Provider>
    <AppNavigator />
  </Provider>
);

export default App;
