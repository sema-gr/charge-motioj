import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TouchableOpacity } from "react-native"

export function MainFrame() {
    return (
        <SafeAreaView>
            <TouchableOpacity>
                <Text>Sema</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}