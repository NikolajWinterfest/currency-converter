import { getObject } from './API.js'
import { flagsOfCountries } from './flagsJPG.js'

export const mobileTable = async () => {
    // EXTRACTING ELEMENT //
    const table = document.getElementById('tableOfExchangeRate-mobile')

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
        const tableList = document.createElement('ul')
        const tableItemOne = document.createElement('li')
        const tableItemTwo = document.createElement('li')
        const tableItemThree = document.createElement('li')
        const tableItemFour = document.createElement('li')

        const headerCode = document.createElement('div')
        const headerUnit = document.createElement('div')
        const headerCurrency = document.createElement('div')
        const headerBaseCurrency = document.createElement('div')

        const bodyCode = document.createElement('div')
        const bodyUnit = document.createElement('div')
        const bodyCurrency = document.createElement('div')
        const bodyBaseCurrency = document.createElement('div')

        const bodyCodeFlag = document.createElement('span')
        const bodyCodeISO = document.createElement('span')

        // CLASS'ES FOR ELEMENT'S //
        tableList.classList.add('mobiletable__list')
        tableItemOne.classList.add('mobiletable__item')
        tableItemTwo.classList.add('mobiletable__item')
        tableItemThree.classList.add('mobiletable__item')
        tableItemFour.classList.add('mobiletable__item')
        headerCode.classList.add('mobiletable__header-code')
        headerUnit.classList.add('mobiletable__header-unit')
        headerCurrency.classList.add('mobiletable__header-currency')
        headerBaseCurrency.classList.add('mobiletable__header-basecurrency')
        bodyCode.classList.add('mobiletable__body-code')
        bodyUnit.classList.add('mobiletable__body-unit')
        bodyCurrency.classList.add('mobiletable__body-currency')
        bodyBaseCurrency.classList.add('mobiletable__body-basecurrency')
        bodyCodeFlag.classList.add('mobiletable__body-code-flag', 'code-flag')
        bodyCodeISO.classList.add('mobiletable__body-code-iso')

        // TEXT FOR ELEMENT'S //
        headerCode.textContent = 'Код'
        headerUnit.textContent = 'Единица'
        headerCurrency.textContent = 'Валюта'
        headerBaseCurrency.textContent = 'Курс базовой валюты'

        bodyCodeFlag.innerHTML = flag
        bodyCodeISO.textContent = currency.CharCode
        bodyUnit.textContent = currency.Nominal
        bodyCurrency.textContent = currency.Name
        bodyBaseCurrency.textContent = currency.Value

        // ADD ELEMENT'S //
        bodyCode.append(bodyCodeFlag, bodyCodeISO)
        tableItemOne.append(headerCode, bodyCode)
        tableItemTwo.append(headerUnit, bodyUnit)
        tableItemThree.append(headerCurrency, bodyCurrency)
        tableItemFour.append(headerBaseCurrency, bodyBaseCurrency)
        tableList.append(
            tableItemOne,
            tableItemTwo,
            tableItemThree,
            tableItemFour
        )
        table.append(tableList)
    }
}