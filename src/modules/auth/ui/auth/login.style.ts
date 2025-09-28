import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F6FA",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    box: {
        backgroundColor: "#fff",
        padding: 24,
        borderRadius: 16,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    title: {
        fontSize: 24,
        fontWeight: "600",
        marginBottom: 20,
        textAlign: "center",
        color: "#333",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 12,
        padding: 12,
        marginBottom: 8,
        fontSize: 16,
        backgroundColor: "#fafafa",
    },
    error: {
        color: "red",
        fontSize: 14,
        marginBottom: 8,
    },
    button: {
        backgroundColor: "#0f860fff",
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: "center",
        marginTop: 12,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 16,
    },
});
