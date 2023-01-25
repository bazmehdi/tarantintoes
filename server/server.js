const express = require('express');
const app = express();

app.get('/shot', (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]});
});

const port = 5000;
app.listen(port, () => console.log('Server started on ' + port));

process.on('uncaughtException', function (err) {
    console.log(err);
});

/* app.get('/shot', (req, res) => {
    con.query('SELECT movies.title, movies.rel_date, shots.shot_path, shots.timestamp FROM movies, shots WHERE movies.id = shots.movie_id ORDER BY RAND ( ) LIMIT 1', function(error, rows, fields){
        if(error) throw error;

        else {
            console.log(rows);
            res.send(rows);
        }
    });
});

app.get('/grid', (req, res) => {
    con.query('SELECT movies.title, movies.rel_date, movies.poster_path, movies.rating, movies.id FROM movies ORDER BY id ASC', function(error, rows, fields){
        if(error) throw error;

        else {
            console.log(rows);
            res.send(rows);
        }
    });
});

app.get('/:id', (req, res) => {

    let movie_id = req.params.id;

    if (!movie_id) {
        return res.status(400).send({ error: true, message: 'Please provide movie_id' });
    }

    con.query('SELECT movies.title, movies.rel_date, movies.rating, movies.poster_path, shots.shot_path, shots.timestamp FROM movies, shots WHERE movies.id = shots.movie_id AND shots.movie_id = ?', movie_id, function(error, rows, fields){
        if(error) throw error;

        else {
            console.log(rows);
            res.send(rows);
        }
    });
});

const port = 5000;
app.listen(port, () => console.log('Server started on ' + port));

process.on('uncaughtException', function (err) {
    console.log(err);
}); */