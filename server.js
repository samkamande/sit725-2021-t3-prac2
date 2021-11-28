const express = require("express");

const app = express();

// app.get('/', (req, red) => {
//     red.send('Hello world');
// });
app.use(express.static(__dirname + '/public'));

app.get('/test'), function(req, res){
    console.log('You have been hit');
   //res.send()
}

//app.listen(3000, () => console.log('listening on port 3000...'));

var port = 3000;
app.listen(port);
console.log('listening on port 3000...');