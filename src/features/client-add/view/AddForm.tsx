import React from "react"
import styled from "styled-components"
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"

import { createItem } from "@/features/clients-list/model"
import { useAppDispatch } from "@/store/hooks"
import { Button, Dropdown, Input } from "@/ui"
import { FormInput, Status } from "@/interfaces/types"
import { formAddSchema } from "@/lib/formAddSchema"

export const AddForm = () => {
    const dispatch = useAppDispatch()
    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors, isSubmitSuccessful },
    } = useForm<FormInput>({
        resolver: yupResolver(formAddSchema),
    })

    const onSubmit = (data: FormInput) => {
        dispatch(createItem(data))
    }

    React.useEffect(() => {
        if (isSubmitSuccessful) {
            reset()
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
                <Controller
                    control={control}
                    name="status"
                    render={({
                        field: { onChange, value },
                    }) => (
                        <Dropdown
                            onOptionChange={onChange}
                            placeholder="Статус"
                            options={[
                                {
                                    value: Status.Active,
                                    text: Status.Active
                                },
                                {
                                    value: Status.Inactive,
                                    text: Status.Inactive
                                },
                                {
                                    value: Status.Suspended,
                                    text: Status.Suspended
                                }
                            ]}
                            selected={value}
                        />
                    )}
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