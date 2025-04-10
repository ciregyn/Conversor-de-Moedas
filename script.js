function converterMoeda() {
    const input = document.querySelector(".input-currency").value.replace(",", ".");
    const valor = parseFloat(input);

    const de = document.querySelector(".to-convert").value;
    const para = document.querySelector(".currency-select").value;

    const valorConvertidoTexto = document.querySelector(".cureency-value");
    const valorParaConverterTexto = document.querySelector(".cureency-value-to-convert");
    const nomeMoedaConvertida = document.getElementById("currency-name");
    const imagemMoedaConvertida = document.querySelector(".currency-image");
    const imagemConverter = document.querySelector(".convert-img")
    const nomeMoedaConverter = document.getElementById("currency-convert");

    if (isNaN(valor)) {
        alert("Por favor, insira um valor válido.");
        return;
    }

    // Taxas fixas de conversão (simuladas)
    const taxas = {
        BRL: { USD: 0.20, EUR: 0.18, GBP: 0.16, BTC: 0.0000049 },
        USD: { BRL: 5.0, EUR: 0.90, GBP: 0.80, BTC: 0.000025 },
        EUR: { BRL: 5.5, USD: 1.1, GBP: 0.88, BTC: 0.000028 },
        GBP: { BRL: 6.2, USD: 1.25, EUR: 1.13, BTC: 0.00003 },
        BTC: { BRL: 200000, USD: 40000, EUR: 36000, GBP: 33000 }
    };

    let moedaOrigem = de;
    let moedaDestino;

    // Mapeamento das moedas de destino (porque o "value" dos selects é diferente)
    switch (para) {
        case "dolar":
            moedaDestino = "USD";
            break;
        case "euro":
            moedaDestino = "EUR";
            break;
        case "libra":
            moedaDestino = "GBP";
            break;
        case "bitcoin":
            moedaDestino = "BTC";
            break;
        case "BRL":
            moedaDestino = "BRL";
            break;
        default:
            moedaDestino = "USD";
    }

    let taxa = 1;

    if (moedaOrigem !== moedaDestino) {
        taxa = taxas[moedaOrigem][moedaDestino];
    }

    const convertido = valor * taxa;

    // Formatando os valores para moeda local
    const formatar = (valor, moeda) =>
        valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: moeda
        });

    valorParaConverterTexto.textContent = formatar(valor, moedaOrigem);
    valorConvertidoTexto.textContent = formatar(convertido, moedaDestino);

    // Alterar nome e imagem da moeda convertida
    switch (moedaDestino) {
        case "USD":
            nomeMoedaConvertida.textContent = "Dólar Americano";
            imagemMoedaConvertida.src = "./assets/dolar.png";
            break;
        case "EUR":
            nomeMoedaConvertida.textContent = "Euro";
            imagemMoedaConvertida.src = "./assets/euro.png";
            break;
        case "GBP":
            nomeMoedaConvertida.textContent = "Libra Esterlina";
            imagemMoedaConvertida.src = "./assets/libra.png";
            break;
        case "BTC":
            nomeMoedaConvertida.textContent = "Bitcoin";
            imagemMoedaConvertida.src = "./assets/bitcoin.png";
            break;
        case "BRL":
            nomeMoedaConvertida.textContent = "Real Brasileiro";
            imagemMoedaConvertida.src = "./assets/real.png";
            break;
    }
    switch (moedaOrigem) {
        case "USD":
            nomeMoedaConverter.textContent = "Dólar Americano";
            imagemConverter.src = "./assets/dolar.png";
            break;
        case "EUR":
            nomeMoedaConverter.textContent = "Euro";
            imagemConverter.src = "./assets/euro.png";
            break;
        case "GBP":
            nomeMoedaConverter.textContent = "Libra Esterlina";
            imagemConverter.src = "./assets/libra.png";
            break;
        case "BTC":
            nomeMoedaConverter.textContent = "Bitcoin";
            imagemConverter.src = "./assets/bitcoin.png";
            break;
        case "BRL":
            nomeMoedaConverter.textContent = "Real Brasileiro";
            imagemConverter.src = "./assets/real.png";
            break;
    }
    
}

