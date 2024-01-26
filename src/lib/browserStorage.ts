const KEY = "redux";
export function loadState() {
    try {
        const serializedState = localStorage.getItem(KEY);
        if (!serializedState) return;
        return JSON.parse(serializedState);
    } catch (e) { }
}

export async function saveState(state: any) {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(KEY, serializedState);
}