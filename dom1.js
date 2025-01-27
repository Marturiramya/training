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


// let form = document.querySelector("form");
// let name = document.getElementById("uName");
// let mail = document.getElementById("uEmail");
// let psw = document.getElementById("uPsw");

// form.addEventListener("submit",(event)=>{
//     event.preventDefault();
    // console.log(event);
    // console.log("form submitted");
    // console.log(name.value);

//     let username = name.value;
//     let email = mail.value;
//     let password = psw.value;
//     let userDetails={
//         username:username,
//         email:email,
//         password:password
//     }
//     console.log(userDetails);
//     localStorage.setItem("userData" , JSON.stringify(userDetails))
// })

// localStorage.clear()


//! dynamic element

// 
let form=document.querySelector("form");
let username = document.getElementById("uName");

let password = document.getElementById("uPass");

let gen = document.getElementById("gender");

form.addEventListener("submit",event=>{
    event.preventDefault(); 
    let un = username.value;
    let up = password.value;
    let gender = " ";
    
    for(let i=0;i<=gen.length-1;i++){

    
        if(gen[i].checked == true){
            gender  += gen[i].value;
        }
    }
    let userDetails={
        un,up,gender
    };
    console.log(userDetails);
})
