const mongoose = require('mongoose')
//password without @123
const mongourl='mongodb+srv://rishabpanda779:******@cluster0.sp8sj.mongodb.net/'

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



