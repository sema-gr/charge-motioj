import { View } from "react-native";
import Providers from "../providers";
import { Login } from "../../modules/auth/ui/auth/login";
import { Calendar } from "../../modules/calendar/ui/calendar";


export default function CalendarScreen() {
    return (
        <Providers>
            <View style={{ backgroundColor: "#ffffffff", flexGrow: 1 }}>
                <Calendar/>
            </View>
        </Providers>
    );
}
