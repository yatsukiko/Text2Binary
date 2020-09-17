const { Plugin } = require('powercord/entities');

module.exports = class t2b extends Plugin {
	async startPlugin () {
			powercord.api.commands.registerCommand({
				  command: 't2b',
				  aliases: [],
				  description: 'Text to binary, add -s at beginning to send the message and -p to put space between',
				  usage: '{c} [-s -p] <text>',
				  executor: (args) => {
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
			})
		}
	pluginWillUnload () {
	  powercord.api.commands.unregisterCommand('t2b')
	}
}

