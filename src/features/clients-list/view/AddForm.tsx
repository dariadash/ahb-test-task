import React from "react"
import styled from "styled-components"
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"

import { createItem } from "../model/clientsSlice"
import { useAppDispatch } from "@/hooks/hooks"
import { Button, Input } from "@/ui"

const phoneRegEx = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object().shape({
    fullname: Yup.string()
        .matches(/^[А-Яа-я ]*$/, 'Допустим только ввод кириллицы без цифр')
        .required('ФИО обязательно'),
    status: Yup.string().matches(/^[А-Яа-я ]*$/, 'Допустим только ввод кириллицы без цифр'),
    phone: Yup.string()
        .required("Телефон обязателен")
        .min(8)
        .max(16)
        .matches(
            phoneRegEx,
            'Номер телефона должен содержать цифры, от 8 до 16 цифр'
        ),
    region: Yup.string()
        .required("Город обязателен")
        .matches(/^[А-Яа-я ]*$/, 'Допустим только ввод кириллицы без цифр')
});

interface FormInput {
    fullname: string,
    status?: string,
    phone: string,
    region: string
}

export const AddForm = () => {
    const dispatch = useAppDispatch()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm<FormInput>({
        resolver: yupResolver(validationSchema),
    })

    const onSubmit = (data: FormInput) => {
        dispatch(createItem(data));
        console.log(data);
    }

    React.useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                fullname: "",
                status: "",
                phone: "",
                region: ""
            })
        }
    }, [isSubmitSuccessful, reset])

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <InputWrapper>
                <Input
                    type="text"
                    id='fullname'
                    placeholder="ФИО"
                    {...register('fullname')}
                />
                {errors.fullname && <p>{errors.fullname.message}</p>}
            </InputWrapper>
            <InputWrapper>
                <Input
                    type="tel"
                    placeholder="Тел."
                    {...register('phone')}
                />
                {errors.phone && <p>{errors.phone.message}</p>}
            </InputWrapper>
            <InputWrapper>
                <Input
                    type="text"
                    placeholder="Город"
                    {...register('region')}
                />
                {errors.region && <p>{errors.region.message}</p>}
            </InputWrapper>
            <InputWrapper>
                <Input
                    type="text"
                    placeholder="Статус"
                    {...register('status')}
                />
                {errors.status && <p>{errors.status.message}</p>}
            </InputWrapper>
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

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    p  {
        color: #c9403e;
    }
`