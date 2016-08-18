var express = require('express');

//var UAParser = require('user-agent-parser');

var app = express();

app.get('/', function (req, res) {
    var ip;
    var lan;         
    var software;
    
    var forwardedIpsStr = req.header('x-forwarded-for'); 
    var forwardedIps    = forwardedIpsStr.split(',');
    ip = forwardedIps[0];
    
    var forwardedLanStr = req.headers["accept-language"];
    var forwardedLans   = forwardedLanStr.split(',');
    lan = forwardedLans[0];
  
  //var parser  = new UAParser();
  var ua  = req.headers['user-agent'];
  var uas = ua.split('(');
  software = uas[1].split(')')[0];
  
    var result = {"ipaddress": ip,"language": lan,"software": software};
    res.send(result);
  
});


app.listen(process.env.PORT, function () {
  console.log('App listening on port !'+process.env.PORT);
});