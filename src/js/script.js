
    // Creating the XMLHttpRequest object
    var request = new XMLHttpRequest();
   

    // Instantiating the request object
    request.open("GET", "https://cors-anywhere.herokuapp.com/https://ltv-data-api.herokuapp.com/api/v1/records.json?email=doesmith@example.com");


    request.onload = function () {
        // Begin accessing JSON data here
        if (request.status >= 200 && request.status < 400) {
             var data = JSON.parse(this.response);
           
              console.log(data);
        
          } else {
            console.log('error')
          }
        }
      
      
      // Send request
      request.send()


    
  