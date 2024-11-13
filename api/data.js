
import { Router } from 'express';
let router = Router();

let data = [
    { "id": "1", "Firstname": "Jyri", "Surname": "Kemppainen"},
    { "id": "2", "Firstname": "Petri", "Surname": "Laitinen"}
]

router.get('/', (req, res) => {
    res.json( data );
})

router.get('/:id', (req, res) => {
    res.json( data.find(b => b.id === req.params.id) )

})

router.post('/', (req, res) => {
    if (data.find(b => b.id === req.body.id)) {
        res.status(409).json( {"error": "record already exists"});
    } else {
        data = [...data, req.body]
        res.json(req.body)
        }
   // res.json( data.find(b => b.id === req.params.id) )
})


//ASSIGNMENT 5
router.post('/data', (req, res) => {
    var theContent = req.get('Content-Type')
    if (theContent !== 'application/json') {
        res.status(415).json( {"error": "unsupported Media Type."});
    } else {
        return res.status(201);
    }
})


router.delete('/data/:id', (req, res) => {
    let theId = data.findIndex(item => item.id === id)
    if (!theId) {
            res.status(404).json( {"error": "Not found"});
        }
})

router.post('/data/:id>', (req, res) => {
    var theContent = req.get('Content-Type')
    if (theContent !== 'application/json') {
        res.status(415).json( {"error": "unsupported Media Type."});
    } else {
        return res.status(201);
    }
})




export default router;