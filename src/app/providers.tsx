import { ReactNode } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <SafeAreaProvider style={{ flex: 1, backgroundColor: "#FAF8FF" }}>
            {children}
        </SafeAreaProvider>
    );
}
