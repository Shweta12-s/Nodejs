const express = require("express");
const app = express();
// console.dir(app)

// app.use((req, res)=> {
    // console.dir(req)
    // res.send("HELLO, THIS IS A HTTP RESPONSE ")
    // console.log("WE GOT A NEW REQUEST!!");
    // res.send({color : 'red'})
//     res.send('<h1> Heading page !! </h1>')
// })
app.get('/', (req, res)=> {
    res.send('NOTHING NOTHING NOTHING hihihu')
    // console.log("CAT REQUEST")
})

app.get('/search', (req, res)=> {
    // console.log(req.query)
    const {q }= req.query;
    if (!q){
        res.send("NOTHING FOUND IF NOTHING SEARCHED")
    }
    res.send(`<h1>Search results for: ${q}</h1>`)
})
app.get('/r/:subreddit', (req, res)=> {
    console.log(req.params)
    res.send("this is a sub reddit")
})


app.get('*', (req, res)=> {
    res.send(`I dont know that path`)
    // console.log("CAT REQUEST")
})


app.get('/cats', (req, res)=> {
    res.send('MEOW!!!')
    // console.log("CAT REQUEST")
})

app.post('/cats', (req, res)=> {
    res.send('TRYING ON POST COMMAND')
    // console.log("CAT REQUEST")
})

app.get('/dogs', (req, res)=> {
    res.send('WOOF!!!')
    // console.log("CAT REQUEST")
})

app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080!")
})

app.get('/r/:subreddit', (req, res)=> {
    res.send("this is a sub reddit")
})

