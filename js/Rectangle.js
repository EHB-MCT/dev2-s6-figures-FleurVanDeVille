"use strict";

import Figure from "./Figure.js";

export default class Rectangle extends Figure{
    constructor(name, height, width){
        super(name);
        this.height = height;
        this.width = width;
    }
}