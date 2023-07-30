import Express  from 'express'
import cors from 'cors'
import db from './connection/db.js'
import Routes from './Routes/Routes.js'
const app=Express()
app.use(cors())
app.use(Express.json())
app.use(Express.urlencoded({extended:true}))
const port=8000

app.use('/',Routes)
db();
app.listen(port,()=>{
    console.log('server running on port 8000')
})