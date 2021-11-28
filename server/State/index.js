module.exports = class {
   constructor(){
      this.sockets = []
   }
   addSocket(socket){
      this.sockets.push(socket.id)
      this.setWatchers(socket)
   }
   setWatchers(socket){
      socket.on('disconnect', ()=>{
         this.sockets = this.sockets.filter(x=>x!== socket.id)
      })

   }
}