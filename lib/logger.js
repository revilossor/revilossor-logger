module.exports = (timestamp = false, prepend = '', delimeter = ' ') => (...messages) => {
  messages = messages.reduce((accumulator, current) => `${accumulator}${delimeter}${current}`)
  const time = timestamp ? `[${new Date().toUTCString()}]${delimeter}` : ''
  if (process.env.LOGGING === 'true') {
    prepend
      ? console.log(`${time}${prepend}${delimeter}${messages}`)
      : console.log(`${time}${messages}`)
  }
}
