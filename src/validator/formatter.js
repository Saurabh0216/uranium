// Trim function

function trim()
{
    let t = " functionUp      " ;
    console.log(t.trim());
}

// Lower case function

function changetoLowerCase()
{
    let lower = "SAURABH TRIPATHI"
    console.log(lower.toLowerCase());
}

//Uper case function

function changeToUpperCase() 
{
    let upper = "functionup" ;
    console.log(upper.toUpperCase());
}

//Export all function

module.exports.trim=trim;
module.exports.changetoLowerCase = changetoLowerCase ;
module.exports.changeToUpperCase = changeToUpperCase ;

