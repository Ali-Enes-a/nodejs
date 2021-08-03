var express = require('express');
var app = express();

app.get('/getCategories', function (req, res) {
   
    var sql = require("mssql");

    
    var config = {
        user: 'alienes',
        password: 'ali123',
        server: 'LAPTOP-HR5BRK88',
        database: 'NORTHWND',
      
        options: {
            trustedConnection: false,           
            enableArithAbort: true,
            trustServerCertificate: true,
        }
        
    };


    
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

       
        var request = new sql.Request();
           
        
        request.query('select CategoryID,CategoryName from Categories', function (err, recordset) {
            
            if (err) console.log(err)

            
            res.send(recordset);
            
        });
    });
});

var server = app.listen(8080, function () {
    console.log('Server çalışıyor 8080');
});
