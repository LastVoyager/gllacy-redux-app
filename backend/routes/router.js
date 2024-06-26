const express = require ('express');
const router = express.Router();

router.get('/goods', (req, res) => {
  const goods = [
    {
      image: "img/image1.png",
      title: "Ice cream with orange jam",
      info:  "More an more jam now.More an more jam now.More an more jam now.",
      amount: 1,
      price: 200,
      id: 1,
    },
    {
      "image": "img/image2.png",
      "title": "Ice cream with a juicy nuts",
      "info":  "More an more nuts now.More an more nuts now.More an more nuts now.",
      "amount": "1",
      "price": "1000",
      "id": 2,
    },
    {
      "image": "img/image3.png",
      "title": "Ice cream with a juicy fresh",
      "info":  "More an more fresh now.More an more fresh now.More an more fresh now.",
      "amount": "1",
      "price": "150",
      "id": 3,
    },
    {
      "image": "img/image4.png",
      "title": "Ice cream with a juicy dream",
      "info":  "More an more dream now.More an more dream now.More an more dream now.",
      "amount": "1",
      "price": "210",
      "id": 4,
    },
    {
      "image": "img/image4.png",
      "title": "Ice cream with a juicy apple",
      "info":  "More an more apple now.More an more apple now.More an more apple now.",
      "amount": "1",
      "price": "110",
      "id": 5,
    },
  ];

  res.send(goods);
});

module.exports = router;