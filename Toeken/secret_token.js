
const get_token =(req,res)=>{
    var jwt = require('jsonwebtoken');
    var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
    res.json({toekn : token})
}


module.exports = get_token;