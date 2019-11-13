const { Router } = require("express");
const Seller = require("./model");
const bcrypt = require("bcrypt");

const router = new Router();

router.post("/seller", (request, response, next) => {
  const password = bcrypt.hashSync(request.body.password, 10);

  const seller = { ...request.body, password };

  Seller.create(seller)
    .then(seller => response.send(seller))
    .catch(next);
});

module.exports = router;
