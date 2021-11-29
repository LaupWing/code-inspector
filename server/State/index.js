module.exports = class {
   constructor(){
      this.sockets = []
      this.rooms   = []
   }
   addSocket(socket){
      this.sockets.push(socket.id)
      this.setWatchers(socket)
   }
   setWatchers(socket){
      socket.emit('hello')
      socket.on('disconnect', ()=>{
         this.sockets = this.sockets.filter(x=>x!== socket.id)
      })
      socket.on('join room', (room_name)=>{
         if(!this.rooms.find(x=>x===room_name)){
            console.log('send')
            socket.emit('room not found')
         }
         // console.log(room_name)
      })
   }
}