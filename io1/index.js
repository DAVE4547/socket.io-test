const io = require('socket.io')(3000)

io.on('connection', socket => {
	socket.emit('client-info')
	socket.on('reply', data => {
		//store client data in db
		console.log(data)
	})
	
	socket.on('msg', data => {
		io.to(data.id).emit('msg-r', data.txt)
	})
	
})
