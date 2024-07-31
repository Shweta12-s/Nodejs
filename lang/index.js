import {franc, francAll} from 'franc';
import langs from 'langs';
import color from 'colors';
// var colors = require('colors');
// import {langs} from 'langs';
// var langs = require('langs');
// var langs = require('langs');
const input = process.argv[2];
const langCode = franc(input);


if (langCode === 'und'){
    console.log("SORRY, CAN'T FIGURE IT OUT! TRY WITH SOMETHING ELSE!!!".green)
}
else{
    const language =langs.where("2", langCode);
console.log( `Our best guess is: ${language.name}`.red)

}
// const language =langs.where("2", langCode);
// console.log(language.name)

