const socket = require('socket.io-client')('http://localhost:3000')

socket.on('client-info', () => {
	socket.emit('reply', {
		// sending client data
		"fn": "123",
		"fm": "456",
		"id": socket.id
	})
})

socket.on('msg-r', data => {
	console.log(data)
})
