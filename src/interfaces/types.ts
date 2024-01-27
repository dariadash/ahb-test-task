export type Client = {
    id: number,
    fullname: string,
    created_at: string,
    phone: string,
    region: string,
    status: string,
    isNew?: boolean
}

export enum Status {
    Active = "Активен",
    Inactive = "Неактивен",
    Suspended = "Приостановлен"
}

export type FormInput = {
    fullname: string,
    status?: Status,
    phone: string,
    region: string
}