import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { CalendarList, DateData } from "react-native-calendars";
import { useGetEvents } from "../hooks/useGetEvents";
import { IEvent } from "../types/calendar";

import { styles } from "./calendar.style";

export function Calendar() {
    const today = new Date();
    const formatToday = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

    const [selectedDate, setSelectedDate] = useState<string>(formatToday);
    const [eventsForSelectedDate, setEventsForSelectedDate] = useState<IEvent[]>([]);
    const { events, loading } = useGetEvents();

    function formatDate(date: string){
        if (!date) return "";
        const parts = date.split(".");
        if (parts.length !== 3) return "";
        const [day, month, year] = parts;
        return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    };

    const markedDates = events.reduce((acc: any, event) => {
        const formattedDate = formatDate(event.date);
        acc[formattedDate] = {
            marked: true,
            dotColor: "#4CAF50",
            activeOpacity: 0,
            selected: selectedDate === formattedDate,
            selectedColor: "#DFF2E1",
        };
        return acc;
    }, {});

    function onDayPress(day: DateData) {
        setSelectedDate(day.dateString);
    };

    useEffect(() => {
        if (selectedDate) {
            const filtered = events.filter(e => formatDate(e.date) === selectedDate);
            setEventsForSelectedDate(filtered);
        } else {
            setEventsForSelectedDate([]);
        }
    }, [selectedDate, events]);

    if (loading) {
        return (
            <SafeAreaView style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#4CAF50" />
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.calendarContainer}>
                <CalendarList
                    pastScrollRange={12}
                    futureScrollRange={12}
                    scrollEnabled
                    showScrollIndicator
                    onDayPress={onDayPress}
                    markedDates={markedDates}
                    theme={{
                        backgroundColor: "#ffffff",
                        calendarBackground: "#ffffff",
                        textSectionTitleColor: "#333333",
                        selectedDayBackgroundColor: "#4CAF50",
                        selectedDayTextColor: "#000000",
                        todayTextColor: "#FF5722",
                        dayTextColor: "#333333",
                        textDisabledColor: "#CCCCCC",
                        dotColor: "#4CAF50",
                        selectedDotColor: "#ffffff",
                        arrowColor: "#4CAF50",
                        monthTextColor: "#333333",
                        indicatorColor: "#4CAF50",
                        textDayFontWeight: "500",
                        textMonthFontWeight: "600",
                        textDayHeaderFontWeight: "500",
                    }}
                />
            </View>


            <View style={styles.eventsContainer}>
                <Text style={styles.eventsTitle}>
                    Події на {selectedDate}:
                </Text>

                {eventsForSelectedDate.length === 0 ? (
                    <Text style={styles.noEventsText}>Немає подій</Text>
                ) : (
                    <FlatList
                        data={eventsForSelectedDate}
                        keyExtractor={item => item.id}
                        initialNumToRender={10}
                        style={styles.flatList}
                        renderItem={({ item }) => (
                            <View style={styles.eventCard}>
                                <Text style={styles.eventTitle}>{item.title}</Text>
                                {item.description && (
                                    <Text style={styles.eventDescription}>{item.description}</Text>
                                )}
                            </View>
                        )}
                    />
                )}
            </View>

        </SafeAreaView>
    );
}