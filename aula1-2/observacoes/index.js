const express = require('express');
const bodyParser= require('body-parser');

const app = express();
app.use(bodyParser.json());
const axios = require('axios');
const observacoesPorLembreteId={};

const { v4: uuidv4 }= require('uuid');


//:id é o placeholder
//exemplo: /lembretes/123456/observacoes
app.put('/lembretes/:id/observacoes', async (req,res) =>{
    const idObs = uuidv4();
    const { texto } = req.body;
    
    observacoesDoLembrete =
    observacoesPorLembreteId[req.params.id] || [];
    observacoesDoLembrete.push({id: idObs, texto});
    observacoesPorLembreteId[req.params.id] =
    observacoesDoLembrete;
    res.status(201).send(observacoesDoLembrete);
});

app.get('/lembretes/:id/observacoes',(req,res) =>{
    res.send(observacoesPorLembreteId[req.params.id] || []);
});

app.post("/eventos", (req, res) => {
    console.log(req.body);
    res.status(200).send({ msg: "ok" });
});

app.listen(5000,(()=>{
    console.log('Lembretes. Porta 5000');
}));


