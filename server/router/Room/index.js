module.exports = class Room {
   static get(req, res){
      const {rooms} = req.app.get('state')
      const find_room = rooms.find(x=>x===req.params.id)
      if(!find_room){
         res.send({
            room: false
         })
      }
      res.send({
         room: true
      })
   }
   static post(req, res){
      
   }
}