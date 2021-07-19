const { Plugin } = require('powercord/entities');

module.exports = class t2b extends Plugin {
	async startPlugin () {
			powercord.api.commands.registerCommand({
				  command: 't2b',
				  aliases: [],
				  description: 'Text to binary, add -s at beginning to send the message, -p to put space between, and -c to convert from binary to text ',
				  usage: '{c} ([-s -p] | -c) <text>',
				  executor: (args) => {
					var ssend = false
					var convert = false
					var space = ""
					const flagC = args.indexOf('-c')
					if (flagC !== -1) {
						convert = true
					args.splice(flagC, 1)
					}
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
					if(convert){
						args.forEach(binaryWord => {
							result += binaryWord.split(' ') 
   							.map(bin => String.fromCharCode(parseInt(bin, 2))) 
   							.join(''); 
						});
					}else{
						args = args.join(" ")
						for (var i = 0; i < args.length; i++) {
							var bin = args[i].charCodeAt().toString(2);
							result += bin + space;
						}  
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

