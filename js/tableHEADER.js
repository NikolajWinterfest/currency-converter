export const tableHeader = () => {
    // EXTRACTING ELEMENT //
    const table = document.getElementById('tableOfExchangeRate')

    // CREATE ELEMENT'S //
    const thead = document.createElement('thead')
    const theadTR = document.createElement('tr')
    const theadThCode = document.createElement('th')
    const theadThUnit = document.createElement('th')
    const theadThCurrency = document.createElement('th')
    const theadThBaseCurrency = document.createElement('th')

    const thCode = document.createElement('span')
    const thUnit = document.createElement('span')
    const thCurrency = document.createElement('span')
    const thBaseCurrency = document.createElement('span')

    // CLASS'ES FOR ELEMENT'S //
    thead.classList.add('table__header')
    theadTR.classList.add('table__header-row')
    theadThCode.classList.add('table__header-col', 'header-col')
    theadThUnit.classList.add('table__header-col', 'header-col')
    theadThCurrency.classList.add('table__header-col', 'header-col')
    theadThBaseCurrency.classList.add('table__header-col', 'header-col')

    thCode.classList.add('header-col__code')
    thUnit.classList.add('header-col__unit')
    thCurrency.classList.add('header-col__currency')
    thBaseCurrency.classList.add('header-col__basecurrency')

    // TEXT for Span //
    thCode.textContent = 'Код'
    thUnit.textContent = 'Единица'
    thCurrency.textContent = 'Валюта'
    thBaseCurrency.textContent = 'Курс базовой валюты'

    // ADD ELEMENT'S //
    table.append(thead)
    thead.append(theadTR)
    theadTR.append(
        theadThCode,
        theadThUnit,
        theadThCurrency,
        theadThBaseCurrency
    )
    theadThCode.append(thCode)
    theadThUnit.append(thUnit)
    theadThCurrency.append(thCurrency)
    theadThBaseCurrency.append(thBaseCurrency)
}