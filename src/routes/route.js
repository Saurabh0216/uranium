const express = require('express');

const router = express.Router();




let players=[]

router.post('/players', function(req, res){

   

    let player= req.body

    let playerName = players.name

    for(let i=0;i<players.length;i++)

    {

        if(players[i].name == playerName)

        {

           return  req.send('players not exits')

        }

    }

    players.push(player)

    console.log('here is the player from requst',players)

    res.send(players)

})





module.exports = router;
