import { Status } from '@/interfaces/types';
import * as Yup from 'yup'

const phoneRegEx = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const formAddSchema = Yup.object().shape({
    fullname: Yup.string()
        .matches(/^[а-яА-Я\s.,!?-]*$/, 'Допустим только ввод кириллицы без цифр')
        .required('ФИО обязательно'),
    status: Yup.mixed<Status>().oneOf(Object.values(Status) as Status[]),
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
        .matches(/^[а-яА-Я\s.,!?-]*$/, 'Допустим только ввод кириллицы без цифр')
});