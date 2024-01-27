export const formattedDate = (date: string) => {
    return new Date(date)
        .toLocaleString('en-GB', {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit'
        })
}