//  function adding(x, y){
//      return x+y;
//  }

//  let result = adding(10, 2);
//  console.log(result);

///////////////////////////////////////////////////////////

//  function concat(str1, str2){
//     return str1+str2;
// }

// let result = concat("hi ", "hello");
// console.log(result);

//////////////////////////////////////////////////////////////

// function twostrings(s1, s2){
//      return `some ${s1} strings ${s2}`;
// }
// console.log(twostrings ("other", "strings"));

/////////////////////////////////////////////////////////////

// let myobj ={
//     first:1,
//     second:2,
//     third:3,
// };

// let accessname = "second";

// console.log(myobj[accessname]);

////////////////////////////////////////////////////////////

// let app = document.querySelector("#app");

// app.innerHTML "something else";

//////////////////////////////////////////////////////////////
// let obj=[
//     {
//         name:"dog",
//         legs:4,
//     },
//     {
//         name:"human",
//         legs:2,
//     },
//     {
//         name:"spider",
//         legs:8,
//     },
// ];

// function addobj(localobject){
//     localobject.forEach((element) => {
//         element.head =1;
//     });
//     return localobject;
// }

//  let result = addobj(obj);
//  console.log(result);

// function less (localobject){
//     let arr = [];
//     localobject.forEach((element) => {
//         if (element.legs >5)
//             arr.push(element);
//     });
//     return arr;
// }
// let result2 = less(obj);
// console.log(result2);


/////////////////////////////////////////////////////////////////
// alert ("hello");

// function scream() {
// console.log('i scream');
// }

// setTimeout(scream, 2000)

// setTimeout(( => {
//     scream()
// }, 2000));

// fetch ("https://pomber.github.io/covid19/timeseries.json")
// .then((response)=> response.json())
// .then((data)=> console.log(data));

function getData(){
    const API_ENDPOINT = "https://pomber.github.io/covid19/timeseries.json";

    fetch(API_ENDPOINT)
    .then((response)=> response.json())
    .then((data)=> processData(data))
    .catch((err)=>error(err));
}

function processData(data){
    // console.log(data)           //display
    //console.table(data)         //zis kan ena array ki li marC
    mauritius(data);
}

function error(err){
        console.info("ena error");
}

getData();

function $(element){
    return document.querySelector(element);
}


function mauritius(data){
    // console.log(data["Mauritius"].pop());
    var usingData= data.Mauritius.pop();
    console.log(usingData)
    $("#date").innerHTML = usingData.date;
    $("#confirmed").innerHTML = usingData.confirmed;
    $("#deaths").innerHTML = usingData.deaths;
    $("#recovered").innerHTML = usingData.recovered;
}


