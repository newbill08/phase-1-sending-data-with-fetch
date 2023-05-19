// // Add your code here
function submitData(name, email) {
  //Take-in Data form
  const formData = {
    name: name,
    email: email
  }

  //Configure (function) data to be used
  const configurationObject = {
    //Declare Verb
    method: "POST",
    //give the communication types
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    //Turn data into strings
    body: JSON.stringify(formData)
  }


  //fetch
  return fetch("http://localhost:3000/users", configurationObject)
  //send data out
    .then(function (response) {
      return response.json();
    })
    //return and use data
    .then(function (object) {
      var currentHTMLContent = document.body.innerHTML;
      var newHTMLContent = currentHTMLContent + object.id;
      document.body.innerHTML = newHTMLContent;
    })
    .catch(error => {
      //created element("paragraph") and store in variable 
      const newerrorElement = document.createElement('p');
      //update that variable with data.message
      newerrorElement.textContent = error.message;
      //place that paragraph in the DOM doc.body location
      document.body.appendChild(newerrorElement)
    });
}

// function submitData(name, email) {
//   return fetch('http://localhost:3000/users', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     },
//     body: JSON.stringify({
//       name: name,
//       email: email
//     })
//   })
//   .then(response => response.json())
//   .then(function(object) {
//     const newIdElement = document.createElement('p');
//     newIdElement.textContent = object.id;
//     document.body.appendChild(newIdElement);
//   })
//   .catch(error => console.log(error));
// }
