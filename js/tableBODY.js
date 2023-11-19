import { getObject } from './API.js'
import { flagsOfCountries } from './flagsJPG.js'

export const tableBody = async () => {
    // EXTRACTING ELEMENT //
    const table = document.getElementById('tableOfExchangeRate')
    // CREATE ELEMENT "tbody" //
    const tbody = document.createElement('tbody')
    // CLASS FOR ELEMENT "tbody" //
    tbody.classList.add('table__body')

    // FLAGS 'img' FOR "tbody" //
    const flagOfCountry = Object.values(flagsOfCountries)

    // API data of currency //
    const objectOfCurrencyData = await getObject()
    const currencyDataValuteKeys = Object.keys(objectOfCurrencyData.Valute)

    for (let i = 0; i < 37; i++) {
        const currencyKey = currencyDataValuteKeys[i]
        const currency = objectOfCurrencyData.Valute[currencyKey]

        const flag = flagOfCountry[i]

        // CREATE ELEMENT'S //
        const tbodyTr = document.createElement('tr')
        const tbodyTdCode = document.createElement('td')
        const tbodyTdUnit = document.createElement('td')
        const tbodyTdCurrency = document.createElement('td')
        const tbodyTdBaseCurrency = document.createElement('td')

        const tdCode = document.createElement('span')
        const tdUnit = document.createElement('span')
        const tdCurrency = document.createElement('span')
        const tdBaseCurrency = document.createElement('span')

        const tdCodeSpanFlag = document.createElement('span')
        const tdCodeSpanISO = document.createElement('span')

        // CLASS'ES FOR ELEMENT'S //
        tbodyTr.classList.add('table__body-row')
        tbodyTdCode.classList.add('table__body-col', 'body-col')
        tdCode.classList.add('body-col__code')
        tdCodeSpanFlag.classList.add('body-col__code-flag', 'code-flag')
        tdCodeSpanISO.classList.add('body-col__code-text')
        tbodyTdUnit.classList.add('table__body-col', 'body-col')
        tdUnit.classList.add('body-col__unit')
        tbodyTdCurrency.classList.add('table__body-col', 'body-col')
        tdCurrency.classList.add('body-col__currency')
        tbodyTdBaseCurrency.classList.add('table__body-col', 'body-col')
        tdBaseCurrency.classList.add('body-col__basecurrency')

        // TEXT FOR ELEMENT'S //
        tdCodeSpanFlag.innerHTML = flag
        tdCodeSpanISO.textContent = currency.CharCode
        tdUnit.textContent = currency.Nominal
        tdCurrency.textContent = currency.Name
        tdBaseCurrency.textContent = currency.Value

        // ADD ELEMENT'S //
        tbodyTr.append(
            tbodyTdCode,
            tbodyTdUnit,
            tbodyTdCurrency,
            tbodyTdBaseCurrency
        )
        tbodyTdCode.append(tdCode)
        tdCode.append(tdCodeSpanFlag, tdCodeSpanISO)
        tbodyTdUnit.append(tdUnit)
        tbodyTdCurrency.append(tdCurrency)
        tbodyTdBaseCurrency.append(tdBaseCurrency)
        tbody.append(tbodyTr)
    }
    table.append(tbody)
}