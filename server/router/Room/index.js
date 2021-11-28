module.exports = class Room {
   static get(req, res){
      console.log('test')
      res.send({
         roomId: true
      })
   }
   static post(req, res){
      
   }
}