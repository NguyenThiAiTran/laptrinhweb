import express from 'express'
import dotenv from 'dotenv/config'
import myDateTime from './date'
import getURL from './getURL'
import viewEngine from './viewEngine'

const app = express()
viewEngine(app)
const port=process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello, My name is Ái Trân')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/about', (req, res) => {
    res.send('Xin chào, tên của tôi là Nguyễn Thị Ái Trân')
})

app.get('/date', (req, res) => {
    const date = myDateTime();
    res.send(date);
});

app.get('/geturl', (req, res) => {
    const getParamsURL = getURL.getParamsURL(req);
    res.send(getParamsURL);
})

app.get('/geturl', (req, res) => {
    const getPath = getURL.getPath(req);
    res.send(getPath);
})

app.get('/ejs', (req, res) => { 
    res.render("test")
})

app.get('/homeejs', (req, res) => { 
    res.render("home")
})

app.get('/aboutejs', (req, res) => { 
    res.render("about")
})