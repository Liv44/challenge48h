export function parseString(value) {
    value = value.toLowerCase()
    const stringTMP = value.split('')
    for (let i = 0; i < value.length; i++) {
        switch (value[i]) {
            case "è":
            case "ê":
            case "ë":
            case "é":
                stringTMP[i] = "e"
                break
            case "à":
            case "â":
                stringTMP[i] = "a"
                break
            case "ï":
            case "ì":
            case "í":
            case "î":
                stringTMP[i] = "i"
                break
            case "ç":
                stringTMP[i] = "c"
                break
            case "ñ":
                stringTMP[i] = "n"
                break
            case "ò":
            case "ö":
            case "õ":
            case "ó":
            case "ô":
                stringTMP[i] = "o"
                break
            case "œ":
                stringTMP[i] = "oe"
                break
            case "û":
            case "ú":
            case "ü":
            case "ù":
                stringTMP[i] = "u"
                break
            default:
                break
        }
    }
    value = stringTMP.join('')
    return value
}

