import { Status } from "@/interfaces/types"

export type FormInput = {
    fullname: string,
    status?: Status,
    phone: string,
    region: string
}
