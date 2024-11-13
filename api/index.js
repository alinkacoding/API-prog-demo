
import { Router } from 'express';
let router = Router()


router.get('/', (req, res) => {
    res.json( {
        'name': 'Home page'

    })
})

router.get('/index', (req, res) => {
    res.json( {
        'hello': 'Hello World'

    })
})

export default router;