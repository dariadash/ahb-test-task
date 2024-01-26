import React from "react"
import { Layout } from "./features/app/view";

import { fetchClients } from "./features/clients-list/model"
import { useAppDispatch, useAppSelector } from "./store/hooks"
import { Routes } from "./router"

export function App() {
    const dispatch = useAppDispatch();
    const { loading, error } = useAppSelector((state) => state.clientsReducer);

    React.useEffect(() => {
        dispatch(fetchClients());
    }, [dispatch]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }
    return (
        <Layout>
            <Routes />
        </Layout>
    )
}