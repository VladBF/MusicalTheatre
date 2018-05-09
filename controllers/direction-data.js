let pg = require('pg');
let connect = "postgres://vladbychok:1111@localhost/musicaltheaterdb";

module.exports = function (req,res) {

    pg.connect(connect,function (err,client,done) {
        if(err){
            return console.error('Error',err);
        }
        client.query(
            'SELECT * FROM management_and_artistic_leadership JOIN management_and_artistic_leadership_name ON management_and_artistic_leadership.management_and_artistic_leadership_name_id =  management_and_artistic_leadership_name.id\n' +
            'JOIN management_and_artistic_leadership_posts ON management_and_artistic_leadership.management_and_artistic_leadership_posts_id = management_and_artistic_leadership_posts.id'
            ,function (err,result) {
                if(err){
                    return console.error('Error',err);
                }

                res.status(200).json({result:result.rows});

                done();


            })
    });



};