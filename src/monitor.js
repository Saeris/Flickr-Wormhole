import good from "good" // https://github.com/hapijs/good
import Winston from 'winston' // https://github.com/winstonjs/winston
import GoodWinston from 'good-winston' // https://github.com/lancespeelmon/good-winston
//import 'winston-loggly-bulk' // https://github.com/loggly/winston-loggly-bulk

Winston.configure({
  transports: [
    /*
    new (Winston.transports.Loggly)({
      token: LOGGLY_TOKEN,
      subdomain: LOGGLY_SUBDOMAIN,
      tags: [`Winston-NodeJS`],
      json: true
    }),
    */
    new (Winston.transports.Console)({
      level: ENV === `production` ? `error` : LOGLEVEL || `info`,
      prettyPrint: true,
      handleExceptions: true,
      humanReadableUnhandledException: true,
      json: false,
      colorize: true
    })
  ]
})

const goodWinstonStream = new GoodWinston({ winston: require(`winston`), format: `MM/DD/YYYY h:mm:ss:SSS a`, utc: false })

export default {
  register: good,
  options: {
    ops: {
      interval: 1000
    },
    reporters: {
      winston: [ goodWinstonStream ]
    }
  }
}
