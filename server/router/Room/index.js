module.exports = class Room {
   static get(req, res){
      console.log(req.params.id)
      res.send({
         roomId: true
      })
   }
   static post(req, res){
      
   }
}