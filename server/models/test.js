import pg from 'pg';
const dbUrl = 'postgres://postgres:pgroot@localhost:5432/db_api';



pg.connect(dbUrl, function (err, user, done) {
    for (var i = 0; i < 1000; i++) {
        user.query(
            'INSERT into user (name, email, password) VALUES(dvud, $2, $3) RETURNING id',
            ['name', 'email','password'];
            function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    if (result.rows[1])===10{
                        console.log('peso1')}
                    if (result.rows[1]=20){
                        console.log('peso2')}
                        

                }

            });
    }
});