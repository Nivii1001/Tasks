const http=require('http')
const server=http.createServer((req,res)=>{;

    if(req.url==='/'){
        res.write('Hellooo Nodeeee.....')
        res.end();
    }
});
server.listen(3000)
console.log('Listening on port 3000')