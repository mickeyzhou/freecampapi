var express = require("express");
var app = express();
var strftime = require("strftime");

app.get('/', function(req, res){
    res.send('https://murmuring-plateau-27272.herokuapp.com/December%2015,%202015\
https://murmuring-plateau-27272.herokuapp.com/1450137600');    
});

app.get('/:time', function(req, res){
    var param = req.params.time;
    console.log(param);
    var oDate = new Date(+param);
    console.log(oDate.toString());
    if(oDate.toString() !== 'Invalid Date'){
        res.send({
            unix: oDate.getTime(),
            natural: strftime('%B %d, %Y', oDate)
        });
    }else{
        res.send({
            unix: null,
            natural: null
        });
    }
});
app.listen(process.env.PORT || 8080);