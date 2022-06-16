//write a function to validate the inputs

function notEmpty() {
  //write variable to get values of the input fields
  var myFirstName = document.getElementById("firstName").value;
  var myScore = document.getElementById("score").value;
  var myAge = document.getElementById("age").value;
  //check if the form fields are empty
  if (myFirstName == "" || myAge == "" || myScore == "") {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'All fields required!',
      footer: '<a href="">Why do I have this issue?</a>',
     
    })
    return false;
    //also check if age and score is a numeric
  } else if (isNaN(myAge) || isNaN(myScore)) {
    alert("Score and Age should be numbers");
    return false;
    //alert the values
  } else {
    alert("First Name:" + myFirstName + "\nAge:" + myAge + "\nmyScore:" + myScore)
  }
}