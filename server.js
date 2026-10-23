const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const fs = require('fs')

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/yess', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'middle.html'))
})

app.get('/choose', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'date.html'))
})
app.get('/chooseType', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'chooseType.html'))
})
app.get('/thenkeww', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'last.html'))
})
app.post('/data', (req, res) =>{
    const submittedDate = req.body.Date;
    const filePath = path.join(__dirname, 'data.json');
    let data = [];
    if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        try {
          data = JSON.parse(fileContent);
        } catch (err) {
          console.log(err)
          data = [];
        }
    }

    // Add new input to array and save back to local file
    data.push(submittedDate);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    res.redirect('/chooseType')
})
app.post('/datetype', (req, res) =>{
    const submittedType = req.body.DateType;
    const filePath = path.join(__dirname, 'data.json');
    let data = [];
    if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        try {
          data = JSON.parse(fileContent);
        } catch (err) {
          data = [];
        }
    }

    // Add new input to array and save back to local file
    data.push(submittedType);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    res.redirect('/thenkeww')
})
app.listen(port, '0.0.0.0', () =>{
    console.log(`Listening on port ${port}`)
})