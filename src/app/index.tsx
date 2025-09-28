import { useRouter } from "expo-router";
import { MainFrame } from "../shared/ui/MainFrame/main-frame";
import { useEffect } from "react";

export default function Index() {
    const router = useRouter();

    useEffect(() => {
        router.replace("/auth");
    }, []);
    
    return (
        <MainFrame />
    )
}