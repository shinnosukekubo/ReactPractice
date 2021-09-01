// var express = require('express');
// var router = express.Router();


// /* GET home page. */
// router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express12' });
// });


// // module.exports = router;

import React from "react";
import { render } from "react-dom";
import data from "../data/recipes.json"
import Menu from "./components/Menu";

render(<Menu recipes={data} />, document.getElementById("root"));