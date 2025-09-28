import { Stack } from "expo-router";
import { Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function CalendarLayout() {
    return (
        <SafeAreaView
            style={{ flex: 1, backgroundColor: "#ffffffff" }}
            edges={["top"]}
        >
            <Stack
                screenOptions={{
                    headerShown: false,
                    statusBarStyle: Platform.OS === "android" ? "dark" : undefined,
                }}
            />
        </SafeAreaView>
    );
}
