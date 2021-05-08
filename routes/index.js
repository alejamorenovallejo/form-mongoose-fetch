const express = require('express');
const router = express.Router();
const User = require("../models/UsersModel")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index')
});

/* POST with Async*/
router.post('/login', async (req,res)=>{
    try {
      const user = await User.create(req.body);
        if(user) {
          res.json(await User.find())
        }
    } catch (error) {
      console.error(error);
      res.status(500);
    }
});
module.exports = router;

