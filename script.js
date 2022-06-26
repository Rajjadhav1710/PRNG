// Pseudo Random Number Generators (PRNGs)
// seed-->1234-->square-->1522756-->8 digits-->01522756-->middle 4 digits-->5227
var seed = 9999199999;
var seedDigits = 10;

function nextRandomInt(){
    var seedSquare=seed*seed;
    seedSquare = seedSquare.toString();
    while(seedSquare.length<seedDigits*2){
        seedSquare = "0" + seedSquare;
    }
    var start,end;
    start = Math.floor(seedDigits / 2);
    end = start + seedDigits;

    seed = parseInt(seedSquare.slice(start,end),10);
    return seed;
}

// for(var i=0;i<20;i++){
//     console.log(nextRandomInt());
// }
// var results = [];
// var counter=0;
// for(;counter<100;counter++){
//     if(results.includes(nextRandomInt()))
//         break;
//     results.push(nextRandomInt());
// }

// console.log(counter);

// var results = [];
// for(var i=0;i<100;i++){
//     var rand = nextRandomInt();
//     if(results[rand]){
//         break;
//     }
//     results[rand] = true;
// }
// console.log(i);

var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");
// ctx.fillRect(20,20,10,10);
// function draw(){
//     var x,y;
//     x=nextRandomInt();
//     y=nextRandomInt();

//     ctx.fillRect(x,y,1,1);

//     requestAnimationFrame(draw);
// }

// draw();
var i=0,j=0;
function draw(){

    if(nextRandomInt()/9999999999<0.5){
        ctx.fillRect(i,j,1,1);
    }
    i++;
    if(i===1000){
        i=0;
        j++;
    }

    requestAnimationFrame(draw);

}

draw();