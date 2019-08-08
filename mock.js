module.exports = function(app,bodyParser) {
    // Form Data: name=ifer&age=18
    app.use(bodyParser.urlencoded({ extended: false }));
    // Request Payload: {"name":"Ifer","age":18}
    app.use(bodyParser.json());
    app.post('/data', (req, res) => {
        res.json(req.body);
    });
};