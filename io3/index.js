const socket = require('socket.io-client')('http://localhost:3000')

socket.emit('msg', {
	"id": "4Y1_ubPN2GAxezbPAAAA",
	"txt": "text message here"
})

socket.on('msg-r', data => {
	console.log(data)
})
