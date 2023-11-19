import { getObject } from './API.js'

export const valueForInput = async () => {
    // EXTRACTING ELEMENT'S //
    const selectLeft = document.querySelector('.leftblock__select')
    const selectRight = document.querySelector('.rightblock__select')
    const inputLeft = document.querySelector('.leftblock__input')
    const inputRight = document.querySelector('.rightblock__input')
    const buttonSwap = document.querySelector('.converter__middleblockbtn')

    const currencyRate = await getObject()
    const rate = Object.keys(currencyRate.Valute)

    // HANDLER EVENT'S //
    inputLeft.addEventListener('input', converter)
    selectLeft.addEventListener('change', converter)
    selectRight.addEventListener('change', converter)
    buttonSwap.addEventListener('click', swapValute)

    function converter() {
        if (!inputLeft.value) {
            inputRight.value = ''
        } else {
            let foundMatchingCurrency = false

            for (let i = 0; i < rate.length; i++) {
                for (let j = 0; j < rate.length; j++) {
                    const currencyKey = rate[i]
                    const currency = currencyRate.Valute[currencyKey]

                    const currencyKeyTwo = rate[j]
                    const currencyTwo = currencyRate.Valute[currencyKeyTwo]

                    if (selectLeft.value.includes('RUR') && (selectRight.value.substr(-3) === currency.CharCode && currency.Nominal === 1)) {
                        inputRight.value = (Number(inputLeft.value) / currency.Value).toFixed(2)

                        foundMatchingCurrency = true
                        break
                    } else if ((selectLeft.value.substr(-3) === currency.CharCode && currency.Nominal === 1) && selectRight.value.includes('RUR')) {
                        inputRight.value = (Number(inputLeft.value) * currency.Value).toFixed(2)

                        foundMatchingCurrency = true
                        break
                    } else if (selectLeft.value.includes('RUR') && (selectRight.value.substr(-3) === currency.CharCode && currency.Nominal > 1)) {
                        inputRight.value = ((Number(inputLeft.value) / currency.Value) * currency.Nominal).toFixed(2)

                        foundMatchingCurrency = true
                        break
                    } else if ((selectLeft.value.substr(-3) === currency.CharCode && currency.Nominal > 1) && selectRight.value.includes('RUR')) {
                        inputRight.value = ((Number(inputLeft.value) * currency.Value) / currency.Nominal).toFixed(2)

                        foundMatchingCurrency = true
                        break
                    } else if ((selectLeft.value.substr(-3) === currency.CharCode) &&
                        (selectRight.value.substr(-3) === currencyTwo.CharCode) &&
                        (currency.Nominal === currencyTwo.Nominal && currency.Value > currencyTwo.Value)) {
                        inputRight.value = (Number(inputLeft.value) * (currency.Value / currencyTwo.Value)).toFixed(2)

                        foundMatchingCurrency = true
                        break
                    } else if ((selectLeft.value.substr(-3) === currency.CharCode) &&
                        (selectRight.value.substr(-3) === currencyTwo.CharCode) &&
                        (currency.Nominal === currencyTwo.Nominal && currency.Value < currencyTwo.Value)) {
                        inputRight.value = (Number(inputLeft.value) / (currencyTwo.Value / currency.Value)).toFixed(2)

                        foundMatchingCurrency = true
                        break
                    } else if ((selectLeft.value.substr(-3) === currency.CharCode) &&
                        (selectRight.value.substr(-3) === currencyTwo.CharCode) &&
                        (currency.Nominal < currencyTwo.Nominal && currency.Nominal === 1)) {
                        inputRight.value = (Number((inputLeft.value) * (currency.Value / currencyTwo.Value)) * currencyTwo.Nominal).toFixed(2)

                        foundMatchingCurrency = true
                        break
                    } else if ((selectLeft.value.substr(-3) === currency.CharCode) &&
                        (selectRight.value.substr(-3) === currencyTwo.CharCode) &&
                        (currency.Nominal > currencyTwo.Nominal && currencyTwo.Nominal === 1)) {
                        inputRight.value = (Number((inputLeft.value) * (currency.Value / currencyTwo.Value)) / currency.Nominal).toFixed(2)

                        foundMatchingCurrency = true
                    } else if ((selectLeft.value.substr(-3) === currency.CharCode) &&
                        (selectRight.value.substr(-3) === currencyTwo.CharCode) &&
                        (currency.Nominal < currencyTwo.Nominal && currencyTwo.Nominal === 10000)) {
                        inputRight.value = (Number((inputLeft.value) * (currency.Value / currencyTwo.Value)) * (currencyTwo.Nominal / currency.Nominal)).toFixed(2)

                        foundMatchingCurrency = true
                    } else if ((selectLeft.value.substr(-3) === currency.CharCode) &&
                        (selectRight.value.substr(-3) === currencyTwo.CharCode) &&
                        (currency.Nominal > currencyTwo.Nominal && currency.Nominal === 10000)) {
                        inputRight.value = (Number((inputLeft.value) * (currency.Value / currencyTwo.Value)) / (currency.Nominal / currencyTwo.Nominal)).toFixed(2)

                        foundMatchingCurrency = true
                    } else if ((selectLeft.value.substr(-3) === currency.CharCode) &&
                        (selectRight.value.substr(-3) === currencyTwo.CharCode) &&
                        (currency.Nominal === 100 && currencyTwo.Nominal === 10)) {
                        inputRight.value = (Number((inputLeft.value) * (currency.Value / currencyTwo.Value)) / (currency.Nominal / currencyTwo.Nominal)).toFixed(2)

                        foundMatchingCurrency = true
                    } else if ((selectLeft.value.substr(-3) === currency.CharCode) &&
                        (selectRight.value.substr(-3) === currencyTwo.CharCode) &&
                        (currency.Nominal === 10 && currencyTwo.Nominal === 100)) {
                        inputRight.value = (Number((inputLeft.value) * (currency.Value / currencyTwo.Value)) * (currencyTwo.Nominal / currency.Nominal)).toFixed(2)

                        foundMatchingCurrency = true
                    } else if (selectLeft.value.substr(-3) === selectRight.value.substr(-3)) {
                        inputRight.value = Number(inputLeft.value)
                    }
                }
            }

            if (!foundMatchingCurrency) {
                console.log('error')
            }
        }
    }

    function swapValute() {
        const leftValue = selectLeft.value
        const rightValue = selectRight.value
        const inputValue = inputLeft.value

        selectLeft.value = rightValue
        selectRight.value = leftValue

        inputRight.value = inputValue

        converter()
    }
}