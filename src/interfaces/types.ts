export type Client = {
    id: number,
    fullname: string,
    created_at: string,
    phone: string,
    region: string,
    status: string
}

export enum Status {
    Active,
    Inactive,
    Suspended
}