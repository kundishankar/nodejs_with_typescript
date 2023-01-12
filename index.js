const express = require("express");
var https = require('https');
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/home", (req, res) => {
    res.send("Hello");
});

//console.log("hello index");

//app.listen(port, console.log(`Server started in the Port : ${port}`));

//CALLBACK

// console.log("method-1");
// const myFunction = () => {
//     // var a = 999*9999*99999999999;
//     // console.log("Method-2 , 10 to the power of 5 is " + a);
//     setTimeout(()=>console.log("method-2"),2000)
// }
// myFunction();

// console.log("method-3");

//get data from api


const getResult = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    var arr1 = [];
    //below code is working 
    try {
		const response = await axios.get(url,  { 
            headers: { "Accept-Encoding": "gzip,deflate,compress" } 
        });
		//console.log(response.data.length);
         response.data.map((item)=>{
             arr1.push(item.name)
        })
	} catch (err) {
		console.log({ message: err });
	}
    return arr1

    //2nd method
    
}

//getResult().then((data)=>console.log(data))

const getOneResult = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    var arr1 = [];
    //below code is working 
    try {
		const response = await axios.get(url,  { 
            headers: { "Accept-Encoding": "gzip,deflate,compress" } 
        });
		arr1.push(response.data.name);
         
	} catch (err) {
		console.log({ message: err });
	}
    return arr1

    //2nd method
    
}

//getOneResult(1).then(data => console.log(data))









