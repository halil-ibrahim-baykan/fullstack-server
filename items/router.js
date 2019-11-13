const { Router } = require("express");
const Items = require("./model");

const router = new Router();

router.get("/items", (req, res, next) => {
  Items.findAll()
    .then(items => res.send(items))
    .catch(next);
});
router.get("/items/:itemId", (req, res, next) => {
  Items.findByPk(req.params.itemId) //{ include: [Player...] }
    .then(item => {
      res.send(item);
    })
    .catch(next);
});

router.post("/items", (req, res, next) => {
  Items.create(req.body)
    .then(newItem => res.json(newItem))
    .catch(next);
});

router.delete("/items/:ItemId", (req, res, next) => {
  console.log("WHAT IS REQ.PARAMS before we get wrecked by params", req.params);

  Items.destroy({
    where: {
      id: req.params.itemId
    }
  })
    .then(numDeleted => {
      if (numDeleted) {
        res.status(204).end();
      } else {
        res.status(404).end();
      }
    })
    .catch(next);
});
router.put("/items/:itemId", (req, res, next) => {
  // res.send('oh hi')
  // console.log(req.params, 'WRECKED BY PARAMS??')
  Items.findByPk(req.params.itemId)
    .then(item => {
      console.log("ITEM FOUND?", item);
      if (item) {
        item.update(req.body).then(item => res.json(item));
      } else {
        res.status(404).end();
      }
    })
    .catch(next);
});

module.exports = router;
