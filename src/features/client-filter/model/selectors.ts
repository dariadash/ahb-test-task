import { RootState } from '@/store/store'

export const selectFilteredUsers = ({ clientsReducer, clientFilterReducer }: RootState) => {
    let filteredClients = clientsReducer.clients
    if (clientFilterReducer.filterStatus) {
        filteredClients = filteredClients.filter(
            (c) => c.status === clientFilterReducer.filterStatus
        )
    }

    filteredClients = filteredClients.filter(
        (c) => {
            const searchText = clientFilterReducer.search.toLowerCase()
            const founded = ['fullname', 'phone', 'region']
                .some((field) => c[field].toLowerCase().includes(searchText))
            return founded
        }
    )

    return filteredClients
}