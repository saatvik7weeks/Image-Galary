const mongoose = require('mongoose')
//password is skpsmp
const mongourl='mongodb+srv://rishabpanda779:skpsmp@cluster0.sp8sj.mongodb.net/'

mongoose.connect(mongourl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const userSchema=mongoose.Schema({
    username:String ,
    email:String,
    imageurl:String

})
module.exports =mongoose.model('user',userSchema)



