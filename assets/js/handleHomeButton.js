
// this function handles the button that is displayed on the homepage
const handleHomeButton = () =>{
    if(localStorage.userProfile){
        // display this button when there is a profile in the local storage
        document.getElementById("authentication-button").innerHTML = `
        <a href="./pages/profile.html">
            <button class="btn">View profile</button>
        </a>
        `
        
    }else{
        // display this button when there is no user profile in the local storage
        document.getElementById("authentication-button").innerHTML = `
        <a href="./pages/form.html">
            <button class="btn">Create profile</button>
        </a>
        
        `
    }
}



// invoking, calling the function
handleHomeButton()

