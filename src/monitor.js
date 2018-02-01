import good from "good" // https://github.com/hapijs/good
import Winston from "winston" // https://github.com/winstonjs/winston
import GoodWinston from "good-winston" // https://github.com/lancespeelmon/good-winston

Winston.configure({
  transports: [
    new Winston.transports.Console({
      level: ENV === `production` ? `error` : LOGLEVEL || `info`,
      prettyPrint: true,
      handleExceptions: true,
      humanReadableUnhandledException: true,
      json: false,
      colorize: true
    })
  ]
})

const goodWinstonStream = new GoodWinston({
  winston: Winston,
  format: `MM/DD/YYYY h:mm:ss:SSS a`,
  utc: false
})

export default {
  plugin: good,
  options: {
    ops: false,
    reporters: {
      winston: [goodWinstonStream]
    }
  }
}
