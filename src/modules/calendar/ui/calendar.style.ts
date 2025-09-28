import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F6FA",
    },
    calendarContainer: {
        flex: 0.9,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    eventsContainer: {
        flex: 0.2,
        padding: 16,
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    flatList: {
        flex: 1,
    },
    eventsTitle: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 12,
        color: "#333333",
    },
    noEventsText: {
        fontSize: 16,
        color: "#777777",
    },
    eventCard: {
        backgroundColor: "#E8F5E9",
        padding: 12,
        borderRadius: 12,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    eventTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#2E7D32",
    },
    eventDescription: {
        fontSize: 14,
        color: "#4CAF50",
        marginTop: 4,
    },
});