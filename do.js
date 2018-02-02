#!/usr/bin/env node

const path = require("path");
const globby = require("globby");
const fs = require("fs-extra");
const cwd = process.cwd();


const camelToSnake = str => str.replace(/([a-z\d])([A-Z])/g, "$1_$2").toLowerCase();
const snakeToCamel = str => str.toLowerCase().replace(/_(.)/g, (match, group1) => group1.toUpperCase());
const camelToKebab = str => str.replace(/([a-z])([A-Z\d])/g, "$1-$2").toLowerCase();
const kebabToCamel = str => str.toLowerCase().replace(/-(.)/g, (match, group1) => group1.toUpperCase());

globby.sync(["./**/*.tsx"]).forEach(name => {
    fs.moveSync(name, name.replace(".tsx", "").split("/").map(i => camelToKebab(i)).join("/") + ".js");    
});