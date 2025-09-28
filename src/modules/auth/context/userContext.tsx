import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Alert } from "react-native";
import { IUser, LoginForm } from "../types/login";
import { API } from "../../../settings";

interface IUserContext {
    user: IUser | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    loading: boolean;
}

const UserContext = createContext<IUserContext>({
    user: null,
    login: async () => { },
    logout: async () => { },
    loading: true,
});

export function useUserContext() {
    return useContext(UserContext);
}

interface IUserContextProviderProps {
    children?: ReactNode;
}

export function UserContextProvider({ children }: IUserContextProviderProps) {
    const [user, setUser] = useState<IUser | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    async function checkToken(token: string) {
        try {
            setLoading(true);
            const res = await axios.get(`${API}/users/`);
            const foundUser = res.data.find((user: IUser) => user.token === token);

            if (foundUser) {
                setUser(foundUser);
                router.navigate("/calendar")
            } else {
                await AsyncStorage.removeItem("token");
                setUser(null);
                console.log("Токен не валідний");
            }
        } catch (err) {
            await AsyncStorage.removeItem("token");
            setUser(null);
        } finally {
            setLoading(false);
        }
    }

    async function login(email: string, password: string) {
        try {
            setLoading(true);
            const res = await axios.get(`${API}/users/`);
            const user: IUser = res.data.find(
                (currentUser: LoginForm) => currentUser.email === email && currentUser.password === password
            );

            if (user && user.token) {
                await AsyncStorage.setItem("token", user.token);
                setUser(user);
            } else {
                Alert.alert("Помилка", "Невірний email або пароль");
            }
        } catch (err) {
            Alert.alert("Помилка", "Не вдалося авторизуватися");
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    async function logout() {
        try {
            setLoading(true);
            await AsyncStorage.removeItem("token");
            setUser(null);
            console.log("Вихід успішний");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const initializeAuth = async () => {
            try {
                const storedToken = await AsyncStorage.getItem("token");

                if (storedToken) {
                    await checkToken(storedToken);
                } else {
                    setLoading(false);
                }
            } catch (error) {
                console.error("Помилка:", error);
                setLoading(false);
            }
        };

        initializeAuth();
    }, []);

    const value = {
        user,
        login,
        logout,
        loading,
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}