const formContainer = document.getElementById("form-container");
const profileCreatedMessage = `
    <div class="success-text">
        Your profile has been created <br />
         <a class="btn btn-white btn-view-profile" href="../pages/profile.html">
            View Profile
        </a>
    </div>
`

// check if there is a profile in the local storage
if(localStorage.userProfile){
    // display profile has been created to the user
    formContainer.innerHTML = profileCreatedMessage;
}



// create a function that gets the value of the inputs
function handleFormSubmission(event){
    event.preventDefault()
    // get the values from the form input
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const date = document.getElementById("date").value;
    const getErrorPlaceholder = document.getElementById("error_message");

    // store the user information into an object data structure
    const userProfile = {
        userFirstName: firstName,
        userLastName: lastName,
        userEmail: email,
        userAddress: address,
        userDOB: date
    }
    // console.log(userProfile)
    // checking if the input of the user is not empty
    if(lastName !== "" && email !== "" && address !== "" && date !== ""){
        // storing data into browser local storage in json stringify format
        localStorage.setItem("userProfile", JSON.stringify(userProfile)); 
        formContainer.innerHTML =  profileCreatedMessage;
    }else if(firstName === ""){
        getErrorPlaceholder.innerHTML = ` <span id="error_text">Firstname is required </span>`
    }else if(lastName === ""){
        getErrorPlaceholder.innerHTML = ` <span id="error_text">Lastname is required</span> `
    }else if(lastName.length < 3){
        getErrorPlaceholder.innerHTML = ` <span id="error_text">Lastname must be greater than 3</span> `
    }else if(email === ""){
        getErrorPlaceholder.innerHTML = ` <span id="error_text">email is required</span> `
    }else if(address === ""){
        getErrorPlaceholder.innerHTML = ` <span id="error_text">address is required</span> `
    }else if(date === ""){
        getErrorPlaceholder.innerHTML = ` <span id="error_text">date of birth is required</span> `
    }


}

