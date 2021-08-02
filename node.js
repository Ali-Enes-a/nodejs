var sql = require("mssql");

var express=require("express");

var app=express();

var dbConfig={
     user:"alienes",
     password:"ali123",
     database:"NORTHWND",
     server:"localhost"
};

app.get("/", function(req , res){
    getEmployees()
});
function getEmployees() {
    var dbConn =  sql.Connection(dbConfig);
    dbConn.connect().then(function () {
        var request = new sql.Request(dbConn);
        request.query("select * from Categories").then(function (resp) {
            console.log(resp);
            dbConn.close();
        }).catch(function (err) {
            console.log(err);
            dbConn.close();
        });
    }).catch(function (err) {
        console.log(err);
    });
}

app.listen(3000);
