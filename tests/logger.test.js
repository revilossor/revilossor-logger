const logger = require('../lib/logger')

const mockTime = 'mockTime'

beforeAll(() => {
  jest.spyOn(Date.prototype, 'toUTCString').mockImplementation(() => mockTime)
  console.log = jest.fn()
  process.env.LOGGING = 'true'
})
beforeEach(() => {
  console.log.mockClear()
})

it('exports a function, which returns a logger function', () => {
  expect(logger).toBeInstanceOf(Function)
  expect(logger()).toBeInstanceOf(Function)
})

it('logger function calls console.log', () => {
  const log = logger()
  log('some stuff')
  expect(console.log).toHaveBeenCalledWith('some stuff')
})

it('logger function accepts rest parameters, default delimeter is space', () => {
  const log = logger()
  log('lots', 'of', 'stuff')
  expect(console.log).toHaveBeenCalledWith('lots of stuff')
})

it('adds a timestamp to logs from the returned logger function', () => {
  const log = logger(true)
  log('time stamp stuff')
  expect(console.log).toHaveBeenCalledWith(`[${mockTime}] time stamp stuff`)
})

it('prependeds message to logs from the returned logger function', () => {
  const log = logger(false, 'mock!')
  log('stuff')
  expect(console.log).toHaveBeenCalledWith('mock! stuff')
})

it('uses the specified delimeter after the prepended message', () => {
  const log = logger(false, 'PREPEND', '::')
  log('something')
  expect(console.log).toHaveBeenCalledWith('PREPEND::something')
})

it('does not log if process.env.LOGGING is false', () => {
  process.env.LOGGING = 'false'
  const log = logger()
  log('some stuff that shouldnt log')
  expect(console.log).not.toHaveBeenCalled()
})
