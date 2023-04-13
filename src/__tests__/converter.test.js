import toNumbers from '../service/toNumbers'
import toWords from '../service/toWords'

describe('Converter test suite', () => {
    it('tests toNumber parser', async () => {
        let numbers = toNumbers('One hundred')

        expect(numbers).toBe(100)

        numbers = toNumbers('Two hundred')

        expect(numbers).toBe(200)

        numbers = toNumbers('One hundred fifty four')

        expect(numbers).toBe(154)

        numbers = toNumbers('One hundred and fifty-four')

        expect(numbers).toBe(154)

        numbers = toNumbers('Two and a half')

        expect(numbers).toBe(2.5)
    })

    it('tests toWords parser', async () => {
        let numbers = toWords(100)

        expect(numbers).toBe('one hundred')

        numbers = toWords(200)

        expect(numbers).toBe('two hundred')

        numbers = toWords(154)

        expect(numbers).toBe('one hundred fifty four')

        numbers = toWords(164)

        expect(numbers).toBe('one hundred sixty four')

        numbers = toWords(2.5)

        expect(numbers).toBe('two point five')
    })
})
