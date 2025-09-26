import { Stack } from "expo-router";
import Providers from "./providers";

export default function RootLayout() {
  return (
    <Providers>
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(calendar)" options={{ headerShown: false }} />
      </Stack>
    </Providers>
  );
}
