// let x = document.createElement("h1");
// x.innerText = "Dynamic creation of html element from JS";
// // x.id ="demo"
// x.setAttribute("id" , "demo");
// console.log(x);

// document.body.appendChild(x);

// let image = document.createElement("img");
// image.src = "./3606208.jpg";
// console.log(image);

// document.body.appendChild(image);


let form = document.querySelector("form");
let name = document.getElementById("uName");
let mail = document.getElementById("uEmail");
let psw = document.getElementById("uPsw");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    // console.log(event);
    // console.log("form submitted");
    // console.log(name.value);

    let username = name.value;
    let email = mail.value;
    let password = psw.value;
    let userDetails={
        username:username,
        email:email,
        password:password
    }
    console.log(userDetails);
    localStorage.setItem("userData" , JSON.stringify(userDetails))
})

// localStorage.clear()