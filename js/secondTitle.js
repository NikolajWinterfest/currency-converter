import { getObject } from './API.js'

export const secondTitle = async () => {
    // EXTRACTING ELEMENT //
    const h2 = document.querySelector('.currencies__title')
    const upToDateInfo = await getObject()

    // H2 (Up-to-date information about currency exchange) //
    const newDate = new Date(upToDateInfo.Date)
    let day = newDate.getDate()
    let month = newDate.getMonth() + 1
    let year = newDate.getFullYear()

    if (day <= 9) {
        day = '0' + day
    } else {
        day = day
    }

    if (month <= 9) {
        month = '0' + month
    } else {
        month = month
    }

    h2.textContent = `КУРСЫ ВАЛЮТ НА ${day}.${month}.${year}`

    return { h2 }
}