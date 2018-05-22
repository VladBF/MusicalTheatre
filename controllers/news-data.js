let pg = require('pg');
let connect = "postgres://vladbychok:1111@localhost/musicaltheaterdb";

module.exports = function (req,res) {

    pg.connect(connect,function (err,client,done) {
        if(err){
            return console.error('Error',err);
        }
        client.query(
            'SELECT * FROM news'
            ,function (err,result) {
                if(err){
                    return console.error('Error',err);
                }

                res.status(200).json({result:result.rows});

                done();


            })
    });



};