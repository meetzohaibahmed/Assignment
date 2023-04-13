import numberToWord from '../../service/toWords'
import wordsToNumbers from '../../service/toNumbers'

export const toNumber = async (request, response) => {
    const numbers = wordsToNumbers(request.body.words)

    const format = {
        message: 'Invalid user input',
        number: null,
    }

    let status = 422

    if (numbers) {
        format.message = 'Success'
        format.number = numbers
        status = 200
    }

    return response.status(status).json(format)
}

export const toWords = async (request, response) => {
    const words = numberToWord(request.body.number)

    const format = {
        message: 'Invalid user input',
        words: null,
    }

    let status = 422

    if (words) {
        format.message = 'Success'
        format.words = words
        status = 200
    }

    return response.status(status).json(format)
}
