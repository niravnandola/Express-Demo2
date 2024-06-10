module.exports = (req,res,next)=>{
    console.log("middleware");
    

    const user=[
        {
            name:"nirav",
            age:19
        },
        {
            name:"nir",
            age:20
        },
        {
            name:"nira",
            age:18
        }
    ]
    console.log(user.length);

    if(user.length == 0){
        return res.send("User is not Found")
    }

    next()
    
    


}