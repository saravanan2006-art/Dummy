import express from 'express'

const app = express();
 app.get('/',(req,res)=>{
    res.send("Asslamwalikkum Lyarii !!!");
 })

app.listen(3000);