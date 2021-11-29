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
      socket.on('disconnect', ()=>{
         this.sockets = this.sockets.filter(x=>x!== socket.id)
      })
      socket.on('create room', (room_name)=>{
         socket.join(room_name)
      })
   }
}