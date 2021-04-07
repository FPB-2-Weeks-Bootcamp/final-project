swal({
  title: "Get a copy!!!",
  text: "Download the latest version of this project from github repository",
  icon: "info",
  buttons: true,
  dangerMode: true,
}).then((willDelete) => {
  if (willDelete) {
    swal("Please wait! You will be redirected shortly!", {
      icon: "success",
    });
    // redirect user to the github page on new page if the popup is not blocked
    window.open(
      "https://github.com/FPB-2-Weeks-Bootcamp/final-project",
      "_blank"
    ) ||
      window.location.assign(
        "https://github.com/FPB-2-Weeks-Bootcamp/final-project"
      );
  } else {
    swal("Cancelled");
  }
});
