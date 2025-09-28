import { View } from "react-native";
import Providers from "../providers";
import { Login } from "../../modules/auth/ui/auth/login";


export default function AuthScreen() {
    return (
        <Providers>
            <View style={{ backgroundColor: "#F5F6FA", flexGrow: 1 }}>
                <Login/>
            </View>
        </Providers>
    );
}
