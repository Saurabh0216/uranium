const express = require('express');
const lodash = require('lodash');
const underscore= require('underscore')
const logger = require('../logger/logger');
const formatter = require('../validator/formatter');
const helper = require('../util/helper');


const router = express.Router();

router.get('/hello', function (req, res) {
    logger.printmsg('Uranium')


    logger.welcome()

 

    //Module 2 functions

    helper.printDate()

    helper.printmounth()

    helper.getBatchInfo()

 

    //Module 3 functions

    formatter.trim()

    formatter.changeToUpperCase()

    formatter.changetoLowerCase()

 

    //Lodash functions

    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    let subArrays = lodash.chunk(months, 3)

    console.log('Chunks of months: ', subArrays)

   

    let oddNumbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

    let lastNumbers = lodash.tail(oddNumbers)

    console.log('Last 9 odd numbers: ',lastNumbers)

 

    let arr1 = [1, 2, 3]

    let arr2 = [2, 3, 4, 4]

    let arr3 = [4, 5]

    let arr4 = [4, 6, 4]

    let arr5 = [5, 8]

    console.log('Merged array with unique values: ',lodash.union(arr1, arr2, arr3, arr4, arr5))

 

    let movie1 = ['horror', 'The Shining']

    let movie2 = ['drama','Titanic']

    let movie3 = ['thriller','Shutter Island']

    let movie4 = ['fantasy','Pans Labyrinth']

    let movieObject = lodash.fromPairs([movie1, movie2, movie3, movie4])

    console.log('Movies object: ', movieObject)

    res.send('My first ever api of the week!')
 
});
 
// REquest meathod



module.exports = router;
// adding this comment for no reason

