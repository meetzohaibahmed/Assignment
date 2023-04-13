export default (input) => {
    const numberWords = [
        '',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
    ]

    const tensWords = [
        '',
        '',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety',
    ]

    const suffixes = ['', 'thousand', 'million']

    if (isNaN(input) || input < 0 || input > 9999999.99) {
        return false
    }

    if (input === 0) {
        return 'zero'
    }

    const inputParts = input.toString().split('.')
    let integerPart = parseInt(inputParts[0], 10)
    let decimalPart = parseInt(inputParts[1] || 0, 10)

    const words = []

    for (let i = 0; integerPart > 0; i++) {
        const thousands = integerPart % 1000
        if (thousands !== 0) {
            const hundreds = Math.floor(thousands / 100)
            const tens = thousands % 100
            if (hundreds !== 0) {
                words.unshift(`${numberWords[hundreds]} hundred`)
            }
            if (tens !== 0) {
                if (tens < 20) {
                    words.push(numberWords[tens])
                } else {
                    words.push(tensWords[Math.floor(tens / 10)])
                    if (tens % 10 !== 0) {
                        words.push(numberWords[tens % 10])
                    }
                }
            }
            if (i !== 0) {
                words.push(suffixes[i])
            }
        }
        integerPart = Math.floor(integerPart / 1000)
    }

    if (decimalPart !== 0) {
        words.push('point')
        for (let i = 0; i < 2; i++) {
            const digit = decimalPart % 10
            if (digit !== 0) {
                words.push(numberWords[digit])
            }
            decimalPart = Math.floor(decimalPart / 10)
        }
    }

    return words.join(' ')
}
