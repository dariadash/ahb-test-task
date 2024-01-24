import React from "react"
import styled from "styled-components"

import { createItem } from "../model/clientsSlice"
import { useAppDispatch } from "@/hooks/hooks"
import { Button, Input } from "@/ui"

export const AddForm = () => {
    const dispatch = useAppDispatch()
    const [formData, setFormData] = React.useState({
        fullname: '',
        status: '',
        phone: '',
        region: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = React.useCallback((e: React.FormEvent) => {
        e.preventDefault()
        dispatch(createItem(formData))
        setFormData({
            fullname: '',
            status: '',
            phone: '',
            region: ''
        });
    }, [formData])

    return (
        <Form onSubmit={onSubmit}>
            <Input
                type="text"
                name="fullname"
                placeholder="fullname"
                value={formData.fullname}
                onChange={handleChange}
            />
            <Input
                type="tel"
                name="phone"
                placeholder="phone"
                value={formData.phone}
                onChange={handleChange}
            />
            <Input
                type="text"
                name="region"
                placeholder="region"
                value={formData.region}
                onChange={handleChange}
            />
            <Input
                type="text"
                name="status"
                placeholder="status"
                value={formData.status}
                onChange={handleChange}
            />
            <input type="submit" hidden />
            <Button type='submit'>Создать</Button>
        </Form>
    )
}

const Form = styled.form`
    padding: 12px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;

    gap: 12px;
    height: 10vh;
`