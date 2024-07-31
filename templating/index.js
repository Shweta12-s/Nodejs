const express = require('express');
const path = require('path')
const app = express();
// const redditData = require('./data.json');
// console.log(redditData);
// app.use(express.static('public'))
// app.use(express.static(path.join(__dirname, 'public')))



app.set('views', path.join(__dirname, '/views'))
app.set('view engine','ejs');
app.get('/', (req,res)=>{
    res.render('home.ejs')


    app.get('/cats', (req, res)=> {
        const cats = 
    ['doraemon', 'nobita', 'sizuka']
        res.render('cats', {cats})
    })

// app.get('/r/:subreddit', (req,res) => {
//     const {subreddit} = req.params;
//     res.render('subreddit', {subreddit});
// })

})
app.get('/rand', (req,res)=>{
    const num = Math.floor ( Math.random()*10 ) +1
    res.render('random', {num})
})

app.listen(3000, ()=> {
    console.log("LISTENING ON THE PORT 3000")
})
