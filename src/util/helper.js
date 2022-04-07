function printDate()
{
    let today = new Date();
    let date = today.getDate()+"-"+(today.getMonth()+1)+"-"+today.getFullYear();
    console.log(date);
}

//Mounth function

function printmounth()
{
     let today = new Date();
     let mounth = today.getMonth()+1
     console.log(mounth);

}

//Batch function

function getBatchInfo()
{
    console.log("Uranium, W3D3, the topic for today is Nodejs module system")

}

module.exports.printDate = printDate;
module.exports.printmounth = printmounth;
module.exports.getBatchInfo = getBatchInfo;
