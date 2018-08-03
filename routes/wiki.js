
const router = require('express').Router();
const { Page } = require("../models");
const { addPage } = require("../views");

router.get('/', (req, res, next) => {
    res.redirect('/wiki');
});

router.get('/add', (req, res, next) => {
    res.send(addPage());
})

router.post('/', async (req, res, next) => {
    const page = new Page( {
        title: req.body.title,
        content: req.body.content
    })
    try {
        await page.save();
        console.log(page);
        res.redirect(`/${page.slug}`);
    } catch (error) { next(error); }
    //res.json(req.body);
});

module.exports = router;

