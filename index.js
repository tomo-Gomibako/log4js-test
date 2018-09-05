const log4js = require("log4js")

const mode = process.argv[3]
const config = {
	appenders: {
		// test: {
		// 	type: "stdout",
		// 	layout: {
		// 		type: "coloured",
		// 		pattern: "%d %p %c %x{user} %m",
		// 		tokens: {
		// 			user: function(logEvent) {
		// 				return "hoge"
		// 			}
		// 		}
		// 	}
		// },
		debugging: {
			type: "stdout"
		},
		staging: {
			type: "dateFile",
			filename: `logs/staging`,
			pattern: "_yyyy-MM-dd_hh-mm-ss"
		},
		production: {
			type: "dateFile",
			filename: `logs/production`,
			pattern: "_yyyy-MM-dd_hh-mm-ss"
		}
	},
	categories: {
		default: {
			appenders: [
				"debugging",
				// "staging",
				// "production",
				// "test"
			],
			level: "INFO"
		},
		debugging: {
			appenders: [
				"debugging"
			],
			level: "ALL"
		},
		staging: {
			appenders: [
				"staging"
			],
			level: "ALL"
		},
		production: {
			appenders: [
				"production"
			],
			level: "OFF"
		}
	},
	replaceConsole: true
}

const log = log4js.configure(config).getLogger(mode)

console.log("hoge")
log.trace("hoge")
log.debug("hoge")
log.info("hoge")
log.warn("hoge")
log.error("hoge")
log.fatal("hoge")

log.debug(JSON.stringify({ a: 1, b: [0, 1, 2, 3] }, null, "\t"))
log.debug({ a: 1, b: [0, 1, 2, 3], c: { ca: 0, cb: () => { return null } } })
