const { shortenABCDString } = require('../functions/shortenABCDString')
const { genABCDString } = require('./utils/genABCDString')
const faker = require('faker')

describe('Given a string consisting of N characters, returns any string that can be obtained from S by repeatedly applying the transformation and cannot be further transformed.', () => {
  test('should get empty string if the input is empty string', () => {
    expect(shortenABCDString('')).toBe('')
  })

  test('should get C if the input is CBACD', () => {
    expect(shortenABCDString('CBACD')).toBe('C')
  })

  test('should get CCADDDD if the input is ABABABCBACADDDDDC', () => {
    expect(shortenABCDString('ABABABCBACADDDDDC')).toBe('CCADDDD')
  })

  test('should get empty string if the input is ABABDC', () => {
    expect(shortenABCDString('ABABDC')).toBe('')
  })

  test('the result should not be transformable again', () => {
    const testString = genABCDString(faker.datatype.number({ min: 0, max: 250000 }))
    const transformedResult = shortenABCDString(testString)
    expect(/AB|BA|CD|DC/g.test(transformedResult)).toBe(false)
  })
})
