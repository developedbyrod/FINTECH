import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="index" options={{headerShown:false}} />
      <Stack.Screen name="login" />
      <Stack.Screen name="signup" options={{
        title: '',
        headerBackTitle: ''
      }} />
    </Stack>
  );
}
