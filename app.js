const Users = [
    {
        userId: '00001',
        username: "zachary",
        surname: "williams",
        email: "zachary@admin.com",
        password: "zachary11"
    },
    {
        userId: '00002',
        username: "Zelda",
        surname: "williams",
        email: "Zelda@user.com",
        password: "zelda11"
    }
];

    // Event Listener for submit button
let submit = document.getElementById("submit");

submit.addEventListener("click", function(event){
    event.preventDefault();
    validate();
});

    //Validates user credentials
function validate(){

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let userFound = false;


    //Loop through Users

    for(let i = 0; i < Users.length; i++){
        if(Users[i].username === username && Users[i].password === password){
            userFound = true;
            // console.log("User credentials exists for " + Users[i].username);
            document.getElementById("login").innerHTML = 
            `<h1>Welcome ${Users[i].username}</h1>`
            break;
        }
    }
    //User does not exist
    if(!userFound){
        console.log("User credentials does not exist");
        alert("User credentials does not exist")
    }
}


