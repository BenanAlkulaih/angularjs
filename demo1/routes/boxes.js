const express = require('express');
const route = express.Router();
route.get("/", function(req, res, next) {
    res.status(200).json(
        [
            
                { img : "image/bild11.jpg",
                kategory  :"  svart under kläder",
                  price : 51,
                  quantity: 1,
                  id :1,
                  rating : 1.3
               },
               { img : "image/bild2.jpg",
               kategory :"mörkblue byxor",
               price : 25,
               quantity: 1,
               id :2,
               rating : 5
            },
            { img : "image/bild3.jpg",
            kategory  :"vit och råd ",
            price : 36,
            quantity: 1,
            id :3,
            rating : 2.3
           },
           { img : "image/bild4.jpg",
           kategory  :"svart T-shirt",
            price : 40,
            quantity: 1,
            id :4,
            rating : 1.67
           },
           { img : "image/bild5.jpg",
           kategory  :"vit t shirt",
            price : 5,
            quantity: 1,
            id :5,
            rating : 3
           },
           { img : "image/bild6.jpg",
           kategory  :"vit barn kläder",
            price : 9,
            quantity: 1,
            id :6,
            rating : 2.5
           },
           { img : "image/bild7.jpg",
           kategory  :"svart jacka",
            price :45,
            quantity: 1,
            id :7,
            rating : 4.5
           },
           { img : "image/bild8.jpg",
           kategory  :"svart T-shirt",
            price : 30,
            quantity: 1,
            id :8,
            rating : 5
           },
           { img : "image/bild9.jpg",
           kategory  :"ljus blå jeans",
            price : 80,
            quantity: 1,
            id :9,
            rating : 2.3
           },
           { img : "image/bild10.jpg",
           kategory  :"ljus blå jean",
            price : 95,
            quantity: 1,
            id :10,
            rating : 3.2
           },
           { img : "image/bild1.jpg",
           kategory  :"mårkgrå T-shirt",
            price : 100,
            quantity: 1,
            id :11,
            rating : 0.9
           },
           { img : "image/bild12.jpg",
           kategory  :"vit T-shirt",
            price : 15,
            quantity: 1,
            id :12,
            rating : 3.83
           }
               ]
             
    );
})

module.exports = route;