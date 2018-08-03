
const router = require('express').Router();


router.get("/",(req, res) =>
{
res.send("get here");
});

router.get("/add", (req, res)=>
{
res.send("2 here");
})

router.post("/", (req, res) =>
{
res.send("3 here");
})

module.exports = router;
