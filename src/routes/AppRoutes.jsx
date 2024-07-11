// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// const AppStack = createNativeStackNavigator();

import { Home } from "@screens/Home";

export function AppRoutes() {
  return (
    // <AppStack.Navigator screenOptions={{ headerShown: false }}>
    //   <AppStack.Screen name={AppRotas.COLETA_EIXO} component={ColetaEixo} />
    // </AppStack.Navigator>
    <Home />
  );
}
