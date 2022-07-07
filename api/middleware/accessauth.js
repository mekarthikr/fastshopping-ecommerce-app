const jwt=require('jsonwebtoken')
require('dotenv').config()

const authenticateToken= async (req,res,next)=>
{
    const authHeader=req.headers['Authorization']
    const token=authHeader && authHeader
    console.log(token)
    if(token==null)
    {
        return res.send("no token")
    }
    jwt.verify(token,process.env.ACCESS_TOKEN,(err,id)=>{
        if(err)
        {
            res.send("Token expired")
            next()
        }
        else
        {
            console.log("has token")
            next()
        }
        console.log("has")
         next()
    })
}
module.exports = {
    authenticateToken
  }