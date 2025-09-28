import { useState, useEffect } from "react";
import axios from "axios";
import { IEvent } from "../types/calendar";
import { API } from "../../../settings";

export function useGetEvents() {
    const [events, setEvents] = useState<IEvent[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEvents = async () => {
            setLoading(true);
            setError(null);

            try {
                const res = await axios.get(`${API}/events`);
                setEvents(res.data);
            } catch (err) {
                const message = err instanceof Error ? err.message : "Не вдалося завантажити івенти";
                console.error(message);
                setError(message);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    return { events, loading, error };
}
