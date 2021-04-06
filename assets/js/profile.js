// GET THE USER PROFILE FROM THE LOCALSTORAGE
const getUserProfileFromLocalStorage = JSON.parse(localStorage.getItem("userProfile"))
// console.log(getUserProfileFromLocalStorage);

if(!localStorage.userProfile){
    // alert("Create a profile from the landing page")
    document.getElementById("profile-container").innerHTML = `
    <div class="warning-text">
        You have not created a profile <a href="../index.html">Go back home</a>
    </div>
    `
}

// DESRTRUCTURING
const { 
    userFirstName, 
    userLastName, 
    userEmail, 
    userAddress, 
    userDOB  
} = getUserProfileFromLocalStorage;


// setting the user profile to the profile.html 
document.getElementById("fullName").innerHTML = userFirstName + " " + userLastName;
document.getElementById("email").innerHTML = userEmail;
document.getElementById("address").innerHTML = userAddress;
document.getElementById("dob").innerHTML = userDOB;

const logOut = () =>{
    // remove the user profile from the local storage

    localStorage.removeItem("userProfile")
    // display logout success to the user
    document.getElementById("profile-container").innerHTML = `
    <div class="warning-text">
        You have successfully logged out. <a href="../index.html">Go back home</a>
    </div>
    `
    // redirect the user to the landing page after 2 seconds
    setTimeout(()=>{
        window.location.assign("./../index.html")
    }, 2000)
}