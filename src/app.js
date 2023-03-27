const express = require("express");
const app = express();
let port = 3000;
const empCollection =  require('../model/model');

require('../db/db');
const path = require('path');
const template_path = path.join(__dirname ,'../template/views')



app.set('view engine','hbs');
app.set('views',template_path)

app.use(express.urlencoded({extended: false}))


app.get('/', (req,res)=>{
    res.render('index')
})



app.listen(port,()=>{
    console.log(`listening to the port ${port}`)
})


app.post('/empdata', async (req,res)=>{
    console.log(req.body);
    
    const empData = new empCollection({
        name : req.body.name,
        email: req.body.email,
        gender : req.body.gender
    });
    const postData = await empData.save();
   response.send(postData);
    res.send(req.body);
});
