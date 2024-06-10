module.exports =(req,res,next)=>{
    console.log("middleware2");

    const cars=[
        {
            compny:"TOYOTA",
            sit_capacity:7,
            model:"FORTUNER",
            color:"black"
        },
        {
            compny:"HONDA",
            sit_capacity:4,
            module:"CITY",
            color:"white"   
        },
        {
            compny:"BMW",
            sit_capacity:5,
            model:"X5",
            color:"red"
        }
    ]
    console.log(cars.length);

    
    
 next()   
}