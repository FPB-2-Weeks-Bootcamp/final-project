const getCurrentUserProfile = JSON.parse(localStorage.getItem("userProfile"));


if(!getCurrentUserProfile){
    // display user not logged in to the user
    document.getElementById("update-profile").innerHTML = `
    <div class="warning-text update-warning-text">
        Unauthorized request. you are not logged in. <a href="../index.html">Go back home</a>
    </div>
    `
    // redirect the user to the landing page after 2 seconds
    setTimeout(()=>{
        window.location.assign("./../index.html")
    }, 2000)
}

// get the user information 
const currentUserFirstName = getCurrentUserProfile.userFirstName;
const currentUserLastName = getCurrentUserProfile.userLastName;
const currentUserEmail = getCurrentUserProfile.userEmail;
const currentUserAddress = getCurrentUserProfile.userAddress;
const currentUserDateOfBirth = getCurrentUserProfile.userDOB;

// get the html form input using their ID
const firstNameInput = document.getElementById("firstName")
const lastNameInput = document.getElementById("lastName")
const emailInput = document.getElementById("email")
const addressInput = document.getElementById("address")
const dateInput = document.getElementById("date")

// get error placeholder, where error is displayed
const getErrorPlaceholder = document.getElementById("error_message");

// replace the html input placeholder with the user details values from the local storage
firstNameInput.value = currentUserFirstName;
lastNameInput.value = currentUserLastName;
addressInput.value = currentUserAddress;
emailInput.value = currentUserEmail;
dateInput.value = currentUserDateOfBirth;




const handleProfileUpdate = (event) =>{
    // create a new object container for the user new record
    const updatedUserProfile = {
        // set the new record with the key from the way it was used in form.js
        userFirstName: firstNameInput.value,
        userLastName: lastNameInput.value,
        userEmail: addressInput.value,
        userAddress: emailInput.value,
        userDOB: dateInput.value,
    }
    localStorage.setItem("userProfile", JSON.stringify(updatedUserProfile))
        // display user not logged in to the user
        document.getElementById("update-profile").innerHTML = `
        <div class="success-text update-warning-text">
            Your profile has been updated successfully. you will be redirected to your profile page</a>
        </div>
        `
        // redirect the user to the landing page after 2 seconds
        setTimeout(()=>{
            window.location.assign("./profile.html")
        }, 2000)
}