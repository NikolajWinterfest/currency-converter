export const getObject = async () => {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js', {
        method: 'GET'
    })

    const result = await response.json()

    return result
}