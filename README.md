### Revilossor-logger

This is just a simple javascript logger

Use it like this:

```
  const timestamps = true // add a timestamp to logs from this instance
  const prepend = '[ExampleLog]' // prepend all logs from this logger instance with this
  const delimiter = ' -- ' // delimit all arguments to the logger instance with this

  const log = require('revilossor-logger')(timestamps, prepend, delimiter) // get an instance

  log('the answer is', 42, '¯\_(ツ)_/¯')
  // [UTC time] -- [ExampleLog] -- the answer is -- 42 -- ¯\_(ツ)_/¯

```
