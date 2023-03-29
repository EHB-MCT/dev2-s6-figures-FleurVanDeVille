"use strict";

import Figure from "./Figure.js";
import Rectangle from "./Rectangle.js";

//import Figure from './Figure.js';
//import Circle from './Circle.js';
//import Rectangle from './Rectangle.js';
//import Square from './Square.js';

const form = {
    changeSelect(e) {

    },
    init() {
        console.log('Form init!');

        const rect = new Rectangle("name", 20, 10);
        console.log(rect);
    },
    inputElementsWithLabel(label, id) {

    },
    submitForm(e) {

    }
};

form.init();