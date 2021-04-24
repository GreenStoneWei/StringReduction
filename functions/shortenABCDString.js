function shortenABCDString(S) {
  if (S.length === 0) {
    return ''
  }
  const regex = /AB|BA|CD|DC/g

  let result = S

  while (regex.test(result)) {
    result = result.replace(regex, '')
  }
  return result
}

module.exports = { shortenABCDString }
