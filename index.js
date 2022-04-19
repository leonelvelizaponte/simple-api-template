const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const defaultResponse = {
    msg: '[Default message] Everything work here'
}  //defaultResponse

const defaultErrorResponse = {
    msg: '[Default message] We got some problems'
}  //defaultErrorResponse

app.get('/', function (req, res) {
    // waiting req.params if apply 
    console.log('[GET] /')
    res.status(200).send(defaultResponse) 
}) // GET /

app.post('/', function (req, res) {
    //validate empty body
    if (Object.keys(req.body).length == 0) {
        res.status(400).send(defaultErrorResponse)
    }

    //Code logic here

    console.log('[POST] /')
    res.status(200).send(defaultResponse) 
}) // POST /

app.put('/', function (req, res) {
    //validate empty body
    if (Object.keys(req.body).length == 0) {
        res.status(400).send(defaultErrorResponse)
    }

    //Code logic here

    console.log('[PUT] /')
    res.status(200).send(defaultResponse)  
}) // PUT /

app.delete('/:id', function (req, res) {

    //Code logic here

    console.log(`[DELETE] /${req.params.id}`)
    res.status(200).send(defaultResponse) 
}) // DELETE /id

app.use(function (req, res, next) {
    console.log(`[${req.method}] ${req.originalUrl} Not Found`)
    res.status(404).send(defaultResponse) 
}) 

app.listen(3000, () => {
    console.log("Listening in port 3000") 
}) 
