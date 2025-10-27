const convertButton = document.querySelector(".convert-button")
const currencySelectToConvert = document.querySelector(".currency-select-to-convert")
const currencySelectOfConvert = document.querySelector(".currency-select-of-convert")

function updateValueForConversion() {
    let inputCurrencyValue = document.querySelector(".input-currency").value
    inputCurrencyValue = parseFloat(inputCurrencyValue.replace(",", "."));
    const currencyValueToConvert = document.getElementById("currency-convert")
    
    if (currencySelectOfConvert.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency", currency: "BRL"
        }).format(inputCurrencyValue)
    }
    
    if (currencySelectOfConvert.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "USD"
        }).format(inputCurrencyValue)
    }

    if (currencySelectOfConvert.value == "euro") {
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", currency: "EUR"
        }).format(inputCurrencyValue)
    }

    if (currencySelectOfConvert.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency", currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelectOfConvert.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency", currency: "BTC"
    }).format(inputCurrencyValue)
}
}

function convertValues() {
    let inputCurrencyValue = document.querySelector(".input-currency").value
    inputCurrencyValue = parseFloat(inputCurrencyValue.replace(",", "."))
    const currencyValueConverted = document.querySelector(".currency-value")

    // taxas fixas simuladas (1 unidade de cada moeda = quantos reais)
    const rates = {
        real: 1,
        dolar: 5.2,
        euro: 6.2,
        libra: 7.2,
        bitcoin: 4.0 // exemplo
    }

    const from = currencySelectOfConvert.value
    const to = currencySelectToConvert.value

    // 1️⃣ converte o valor de origem para REAL
    const valueInReal = inputCurrencyValue * rates[from]

    // 2️⃣ converte de REAL para a moeda de destino
    const convertedValue = valueInReal / rates[to]

    // 3️⃣ formata o resultado com base na moeda destino
    const currencyFormats = {
        real: { locale: "pt-BR", code: "BRL" },
        dolar: { locale: "en-US", code: "USD" },
        euro: { locale: "de-DE", code: "EUR" },
        libra: { locale: "en-GB", code: "GBP" },
        bitcoin: { locale: "en-US", code: "BTC" }
    }

    const format = currencyFormats[to]
    currencyValueConverted.innerHTML = new Intl.NumberFormat(format.locale, {
        style: "currency",
        currency: format.code
    }).format(convertedValue)

    currencyValueConverted.style.color = "#555555"
    currencyValueConverted.style.fontSize = "20px"
    currencyValueConverted.style.fontWeight = "700"

    if (from == to) {
        alert("Por favor, informe moedas diferentes para conversão")
        currencyValueConverted.innerHTML = "Vamos la amigão, não tem porque converter a mesma moeda !!"
        currencyValueConverted.style.textAlign= "center"
        currencyValueConverted.style.fontSize = "10px"
        currencyValueConverted.style.fontSize = "10px"
        currencyValueConverted.style.color = "red"
    }

}


function changeCurrencyConverted(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelectToConvert.value == "real") {
        currencyName.innerHTML = "Real brasileiro"
        currencyImage.src = "assets/real.png"
    }
    
    if (currencySelectToConvert.value == "dolar") {
        currencyName.innerHTML = "Dólar"
        currencyImage.src = "assets/dolar.png"
    }

    if (currencySelectToConvert.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "assets/euro.png"
    }

    if (currencySelectToConvert.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "assets/libra.png"
    }

    if (currencySelectToConvert.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "assets/bitcoin.png"
    }

    convertValues()
}

function changeCurrencyConversion(){
    const currencyNameToConvert = document.querySelector(".currency")
    let inputCurrencyValue = document.querySelector(".input-currency").value
    inputCurrencyValue = parseFloat(inputCurrencyValue.replace(",", "."));
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //Valor em real
    const currencyConvertImage = document.querySelector(".currency-convert-img")

    if (currencySelectOfConvert.value == "real") {
        currencyNameToConvert.innerHTML = "Real brasileiro"
        currencyConvertImage.src = "assets/real.png"
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
            style: "currency", currency: "BRL"
        }).format(inputCurrencyValue) //Vai formatar o numero informado pelo cliente no input para real.
    }
    
    if (currencySelectOfConvert.value == "dolar") {
        currencyNameToConvert.innerHTML = "Dólar"
        currencyConvertImage.src = "assets/dolar.png"
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency", currency: "USD"
        }).format(inputCurrencyValue) //Vai formatar o numero informado pelo cliente no input para dolar.
        
        
    }

    if (currencySelectOfConvert.value == "euro") {
        currencyNameToConvert.innerHTML = "Euro"
        currencyConvertImage.src = "assets/euro.png"
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE",{
            style: "currency", currency: "EUR"
        }).format(inputCurrencyValue) //Vai formatar o numero informado pelo cliente no input para euro.
    }

    if (currencySelectOfConvert.value == "libra") {
        currencyNameToConvert.innerHTML = "Libra"
        currencyConvertImage.src = "assets/libra.png"
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB",{
            style: "currency", currency: "GBP"
        }).format(inputCurrencyValue) //Vai formatar o numero informado pelo cliente no input para libra.
    }

    if (currencySelectOfConvert.value == "bitcoin") {
        currencyNameToConvert.innerHTML = "Bitcoin"
        currencyConvertImage.src = "assets/bitcoin.png"
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency", currency: "BTC"
        }).format(inputCurrencyValue) //Vai formatar o numero informado pelo cliente no input para bitcoins.
    }

    convertValues()
    
}

function replaceValuePlaceholder(){
    const inputCurrencyPlaceholder = document.querySelector(".input-currency")

    if (currencySelectOfConvert.value == "real") {
        inputCurrencyPlaceholder.placeholder = "R$ 10.000,00"
    }
   
    if (currencySelectOfConvert.value == "dolar") {
        inputCurrencyPlaceholder.placeholder = "US$ 10,000.00"
    }

    if (currencySelectOfConvert.value == "euro") {
        inputCurrencyPlaceholder.placeholder = "10.000 €"
    }

    if (currencySelectOfConvert.value == "libra") {
        inputCurrencyPlaceholder.placeholder = "£10,000.00"
    }

    if (currencySelectOfConvert.value == "bitcoin") {
        inputCurrencyPlaceholder.placeholder = "₿10,000.00000000"
    }
}


currencySelectOfConvert.addEventListener("change", changeCurrencyConversion)
currencySelectOfConvert.addEventListener("change", replaceValuePlaceholder)
currencySelectToConvert.addEventListener("change", changeCurrencyConverted)
convertButton.addEventListener("click", updateValueForConversion)
convertButton.addEventListener("click", convertValues)

