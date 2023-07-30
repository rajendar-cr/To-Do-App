import mongoose from 'mongoose'

const TodoSchema=mongoose.Schema({
    data:{
       type:String,
       required:true
    },
    Done:{
        type:Boolean,
        default:false
    },
    createdAt:{
       type:Date,
       default:Date.now()
    }
})
const TodoModel=mongoose.model('TODO',TodoSchema)
export default TodoModel