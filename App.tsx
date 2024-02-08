import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";

import RootNavigator from "./routes/RootNavigator";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <RootNavigator />
    </>
  );
}
