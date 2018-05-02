let pg = require('pg');
let connect = "postgres://vladbychok:1111@localhost/musicaltheaterdb";

module.exports = function (req,res) {

    pg.connect(connect,function (err,client,done) {
        if(err){
            return console.error('Error',err);
        }
        client.query(
            'SELECT * FROM main_table_of_the_performance JOIN genre ON main_table_of_the_performance.genre_id =  genre.id\n' +
            'JOIN age_category ON main_table_of_the_performance.age_category_id = age_category.id'
            ,function (err,result) {
                if(err){
                    return console.error('Error',err);
                }

                res.status(200).json({result:result.rows});

                done();


            })
    });



};