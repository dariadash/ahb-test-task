import { Status } from "./types";

export const statusResolver = (status: Status) => {
    switch (status) {
        case Status.Active: return 'Активен'
        case Status.Inactive: return 'Неактивен'
        case Status.Suspended: return 'Приостановлен'
        default: return "Не указан"
    }
}