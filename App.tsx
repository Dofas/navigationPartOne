import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { FavouriteContextProvider } from "store/context/favourite-context";
import { store } from "store/redux/store";

import RootNavigator from "./routes/RootNavigator";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavouriteContextProvider>
        <Provider store={store}>
          <RootNavigator />
        </Provider>
      </FavouriteContextProvider>
    </>
  );
}
