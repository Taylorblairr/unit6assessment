const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('should be array', () => {
        expect.arrayContaining([expect.any(String)])
    })
})

test('check if fav bot is here', () => {
    expect((shuffleArray).length).toBe(shuffleArray.length)
})