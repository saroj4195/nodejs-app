import express from "express";

const app = express();

app.use(express.json());

app.get('/', (req, res)=>{
    console.log(req.query.name);
    res.send(req.query.name);
    // res.json({'msg':'hello world'});
})

app.post('/home', (req, res)=>{
    res.send(req.body.name);
});


const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>console.log(`server running ${PORT}`));


