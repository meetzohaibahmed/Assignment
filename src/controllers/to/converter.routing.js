import { toWords, toNumber } from './converter.action'

module.exports = {
    '/words': {
        post: {
            action: toWords,
        },
    },
    '/number': {
        post: {
            action: toNumber,
        },
    },
}
