import { getObject } from './API.js'

export const effectOfSelect = async () => {
    // EXTRACTING ELEMENT'S //
    const selectLeft = document.querySelector('.leftblock__select')
    const selectRight = document.querySelector('.rightblock__select')
    const selectLeftWrapper = document.querySelector('.leftblock__wrapper')
    const selectRightWrapper = document.querySelector('.rightblock__wrapper')

    // EVENT'S HANDLER //
    // Animation class for LEFT SELECT
    selectLeft.addEventListener('click', () => {
        selectLeftWrapper.classList.toggle('wrapper--active')
    })
    selectLeft.addEventListener('blur', () => {
        selectLeftWrapper.classList.remove('wrapper--active')
    })
    //
    // Animation class for RIGHT SELECT
    selectRight.addEventListener('click', () => {
        selectRightWrapper.classList.toggle('wrapper--active')
    })
    selectRight.addEventListener('blur', () => {
        selectRightWrapper.classList.remove('wrapper--active')
    })

    // CREATE ELEMENT (RUR) for left OPTION //
    const optionRuLeft = document.createElement('option')
    optionRuLeft.classList.add('leftblock__currencies')
    optionRuLeft.textContent = `РОССИЙСКИЙ РУБЛЬ RUR`
    selectLeft.append(optionRuLeft)

    const objectOfCurrency = await getObject()
    const currencValuteKeys = Object.keys(objectOfCurrency.Valute)

    for (let i = 0; i < 37; i++) {
        // CREATE ELEMENT'S //
        const currencyKey = currencValuteKeys[i]
        const currency = objectOfCurrency.Valute[currencyKey]
        const optionLeftblock = document.createElement('option')
        const optionRightblock = document.createElement('option')

        // CLASS FOR ELEMENT'S //
        optionLeftblock.classList.add('leftblock__currencies')
        optionRightblock.classList.add('rightblock__currencies')

        // TEXT FOR ELEMENT'S //
        optionLeftblock.textContent = `${currency.Name.toUpperCase()} ${currency.CharCode}`
        optionRightblock.textContent = `${currency.Name.toUpperCase()} ${currency.CharCode}`

        // ADD ELEMENT'S //
        selectLeft.append(optionLeftblock)
        selectRight.append(optionRightblock)
    }

    // CREATE ELEMENT (RUR) for right OPTION //
    const optionRuRight = document.createElement('option')
    optionRuRight.classList.add('rightblock__currencies')
    optionRuRight.textContent = `РОССИЙСКИЙ РУБЛЬ RUR`
    selectRight.append(optionRuRight)
}