export default (input) => {
    const wordsToNumbers = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        ten: 10,
        eleven: 11,
        twelve: 12,
        thirteen: 13,
        fourteen: 14,
        fifteen: 15,
        sixteen: 16,
        seventeen: 17,
        eighteen: 18,
        nineteen: 19,
        twenty: 20,
        thirty: 30,
        forty: 40,
        fifty: 50,
        sixty: 60,
        seventy: 70,
        eighty: 80,
        ninety: 90,
        hundred: 100,
        thousand: 1000,
        million: 1000000,
    }

    const fractions = {
        half: 0.5,
        quarter: 0.25,
    }

    const words = input
        .replace(/(-| and )/g, ' ')
        .replace(/point/g, '.')
        .toLowerCase()
        .split(' ')
        .filter((word) => word !== '')

    let number = 0
    let decimal = 0
    let isFraction = false
    let fractionValue = 0

    for (let i = 0; i < words.length; i++) {
        const word = words[i]

        if (word in wordsToNumbers) {
            const value = wordsToNumbers[word]

            if (isFraction) {
                fractionValue += value
            } else if (value === 100) {
                number *= value
            } else if (value >= 1000) {
                number += number * value
            } else {
                number += value
            }
        } else if (word in fractions) {
            if (isFraction) {
                fractionValue += fractions[word]
            } else {
                isFraction = true
                fractionValue = fractions[word]
            }
        } else if (word === '.') {
            decimal = 1
        }
    }

    if (fractionValue > 0) {
        decimal = fractionValue
    }

    if (number < 0 || number > 9999999.99) {
        return false
    }

    return number + decimal
}
