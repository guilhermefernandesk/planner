import { ThemeProvider } from "styled-components";
import theme from "@theme/index";
import { View, StatusBar } from "react-native";
import { Slot } from "expo-router";

export default function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <View style={{ flex: 1, backgroundColor: theme.COLORS.zinc[950] }}>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        <Slot />
      </View>
    </ThemeProvider>
  );
}
