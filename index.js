
import express from "express"

const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.set('view engine', 'ejs');

//apartado a
app.get('/basico', (req, res) => {
    const persona = {
        nombre : 'Sergio',
        edad: 30
    }
    const variables = {
        x: 2, y: 3
    }
    const lista = [1,2,3,4,5,6,7,8,9,10]
    const datos = {
        persona,
        variables,
        lista
    }
    res.render('basico', {datos})
})

//apartado b
app.get('/estrellas', (req, res) => {
    const n = req.query.numero
    res.render('estrellas', {n})
})

app.get('/formulario', (req, res) => res.render('form'))
app.post('/datos',(req, res) => {
    const {email, password} = req.body
    res.json({email,password})
})

app.listen(8080, () => console.log('listening on port 8080'))