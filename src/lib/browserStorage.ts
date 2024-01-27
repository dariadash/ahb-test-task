import { Client } from "@/interfaces/types";

const ADDED_USERS_KEY = "ADDED_USERS";

export function loadState(): Client[] {
    const serializedState = localStorage.getItem(ADDED_USERS_KEY);
    if (!serializedState) return [];
    return JSON.parse(serializedState);
}

export function saveState(state: Client[]) {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(ADDED_USERS_KEY, serializedState);
}
