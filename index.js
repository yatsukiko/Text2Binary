const { Plugin } = require('powercord/entities');

module.exports = class t2b extends Plugin {
	async startPlugin () {
		this.registerCommand(
			  't2b',
			  [],
			  'Text to binary, add -s at beginning to send the message and -p to put space between',
			  '{c} [-s -p] <text>',
			  (args) => {
				var ssend = false
				var space = ""
				const flagP = args.indexOf('-p')
				if (flagP !== -1) {
					space = " "
				args.splice(flagP, 1)
				}
				const flagS = args.indexOf('-s')
				if (flagS !== -1) {
					ssend = true
				args.splice(flagS, 1)
				}
				var result = ""
				args = args.join(" ")
				for (var i = 0; i < args.length; i++) {
					var bin = args[i].charCodeAt().toString(2);
					result += bin + space;
				}   
				return{
					send: ssend,
					result: result
				}
			  }
		)
	}
}