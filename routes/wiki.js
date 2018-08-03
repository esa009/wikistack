
const router = require('express').Router();
const { Page } = require("../models");
const { addPage } = require("../views");
const { wikiPage }= require("../views");
const { User } = require("../models");

router.get('/', (req, res, next) => {
    res.redirect('/wiki');
});

router.get('/add', async (req, res, next) => {
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
        res.redirect(`/wiki/${page.slug}`);
    } catch (error) { next(error); }
    //res.json(req.body);
});

router.get('/:slug', async (req, res, next) => {
    try{
    //res.send(`hit dynamic route at ${req.params.slug}`);
    const foundPage = await Page.findOne({
        where:{ slug: req.params.slug}
    })
    const author = await User.findOne({
        where:{ name: req.params.name}
    })
    res.send(wikiPage(foundPage,author));
       }
          catch(error) {next(error)}
  });





module.exports = router;

