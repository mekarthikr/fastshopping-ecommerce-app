//const user=new userSchema({firstname,lastname,email,password,phonenumber})
try{
    const {firstname,lastname,email,password,phonenumber}=req.body
    console.log(email)
    const user=await userSchema.findOne({email:email})
    console.log(user)
    if(user)
    {
        throw "Email already available"
    }
    user =new userSchema(firstname,lastname,email,password,phonenumber)

    const data=await user.save()
    res.send(data)
}
catch(err)
{
    res.send('Error'+err)
}