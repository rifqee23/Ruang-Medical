import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="dashboard" options={{ title: "Dashboard" }} />
      <Stack.Screen name="about" options={{ title: "About" }} />
      <Stack.Screen name="anatomi" options={{ title: "Anatomi" }} />
    </Stack>
  );
}
