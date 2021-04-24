const faker = require('faker')

function genABCDString(length) {
  let result = ''
  for (let i = 0; i < length; i++) {
    const letter = faker.helpers.randomize(['A', 'B', 'C', 'D'])
    result += letter
  }
  return result
}

module.exports = { genABCDString }
