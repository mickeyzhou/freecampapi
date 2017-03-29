var express = require("express");
var app = express();
var strftime = require("strftime");

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
app.listen(8080);