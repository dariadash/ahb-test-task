import React from "react"
import styled from "styled-components"
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"

import { useAppDispatch } from "@/store/hooks"
import { Button, Dropdown, Icon, Input } from "@/ui"
import { editItem } from "../model"
import { FormInput, Status } from "@/interfaces/types"
import { formAddSchema } from "@/lib/formAddSchema"
import { formattedDate } from "@/lib/dateFormat"

type ClientsListEditItemProps = {
    id: number,
    fullname: string,
    status: Status,
    phone: string,
    region: string,
    created_at: string,
    setEdit: (b: boolean) => void
}

export const ClientsListEditItem = ({
    id,
    fullname,
    phone,
    region,
    status,
    created_at,
    setEdit
}: ClientsListEditItemProps) => {
    const dispatch = useAppDispatch()

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<FormInput>({
        resolver: yupResolver(formAddSchema),
        defaultValues: {
            fullname: fullname,
            phone: phone,
            region: region,
            status: status
        }
    })

    const onSubmit = (data: FormInput) => {
        dispatch(editItem({ id: id, updatedData: data }))
        setEdit(false)
    }

    return (
        <TableRow onSubmit={handleSubmit(onSubmit)}>
            <TableTd>{id}</TableTd>
            <TableTd>
                <Input
                    type="text"
                    placeholder="ФИО"
                    {...register('fullname')}
                />
                {errors.fullname && <p>{errors.fullname.message}</p>}
            </TableTd>
            <TableTd>
                <Input
                    type="tel"
                    placeholder="Тел."
                    {...register('phone')}
                />
                {errors.phone && <p>{errors.phone.message}</p>}
            </TableTd>
            <TableTd>
                <Input
                    type="text"
                    placeholder="Город"
                    {...register('region')}
                />
                {errors.region && <p>{errors.region.message}</p>}
            </TableTd>
            <TableTd>
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
            </TableTd>

            <TableTd>{formattedDate(created_at)}</TableTd>
            <TableButtonTd>
                <input type="submit" hidden />
                <Button type='submit'>
                    <Icon icon="save" />
                </Button>
            </TableButtonTd>
        </TableRow >
    )
}

const TableRow = styled.form`
    display: table-row;
`

const TableTd = styled.div`
    display: table-cell;
    border: 1px solid #a3b7c7;
    padding: 8px;
    text-align: left;

    p  {
        color: #c9403e;
        margin: 2px;
    }
`

const TableButtonTd = styled.div`
    display: table-cell;
    padding: 8px;
`