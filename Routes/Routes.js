import express from "express";
import TodoModel from "../TodoSchema/Todomodel.js";
    const route=express.Router();

    route.post('/todos',async(req,res)=>{
      const newdata=await TodoModel.create({
        data:req.body.data,
        createdAt:Date.now()
      })
      await newdata.save()
      return res.status(200).json(newdata)
    })
    route.get('/todos',async(req,res)=>{
      const data=await TodoModel.find({}).sort({'createdAt':-1})
      return res.status(200).json(data)
    })
    route.get('/todos/:id',async(req,res)=>{
      const dataRef=await TodoModel.findById(req.params.id)
      const data=await TodoModel.findOneAndUpdate({_id:req.params.id},{done:!dataRef.done})
      await data.save()
      return res.status(200).json(data)
    })
    route.get('/todos/:id',async(req,res)=>{
      const dataRef=await TodoModel.findById(req.params.id)
      const data=await TodoModel.findOneAndUpdate({_id:req.params.id},{done:!dataRef.done})
      await data.save()
      return res.status(200).json(data)
    })
    route.put('/todos/:id',async(req,res)=>{
    
     await TodoModel.findOneAndUpdate({_id:req.params.id},{data:req.body.data})
      const dataRef=await TodoModel.findById(req.params.id)
      return res.status(200).json(dataRef)
    })
    route.delete('/todos/:id',async(req,res)=>{
    
       const dataRef=await TodoModel.findByIdAndDelete(req.params.id)
       return res.status(200).json(dataRef)
     })

    
export default route