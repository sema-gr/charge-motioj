import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Animated, { FadeInUp } from "react-native-reanimated";
import { useForm, Controller } from "react-hook-form";
import { LoginForm } from "../../types/login";
import { useUserContext } from "../../context/userContext";

import { styles } from "./login.style";

export function Login() {
    const { login } = useUserContext()

    const { control, handleSubmit, formState: { errors } } = useForm<LoginForm>({ defaultValues: { email: "", password: "" }, });

    async function onSubmit(data: LoginForm) {
        login(data.email, data.password)
    };

    return (
        <SafeAreaView style={styles.container}>
            <Animated.View entering={FadeInUp.duration(600)} style={styles.box}>
                <Text style={styles.title}>Авторизація</Text>

                <Controller
                    control={control}
                    name="email"
                    rules={{
                        required: "Email обов'язковий",
                        pattern: { value: /\S+@\S+\.\S+/, message: "Некоректний email" },
                    }}
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            style={[styles.input, errors.email && { borderColor: "red" }]}
                            placeholder="Email"
                            value={value}
                            onChangeText={onChange}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    )}
                />
                {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

                <Controller
                    control={control}
                    name="password"
                    rules={{
                        required: "Пароль обов'язковий",
                        minLength: { value: 6, message: "Мінімум 6 символів" },
                    }}
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            style={[styles.input, errors.password && { borderColor: "red" }]}
                            placeholder="Пароль"
                            value={value}
                            onChangeText={onChange}
                            secureTextEntry
                        />
                    )}
                />
                {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

                <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
                    <Text style={styles.buttonText}>Увійти</Text>
                </TouchableOpacity>
            </Animated.View>
        </SafeAreaView>
    );
}