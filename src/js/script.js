
    var emailStr = '';
    var description = '';

      function displayResult(){
        $(".transparentCover").show();
        $(".loading").show();
   
         // Creating the XMLHttpRequest object
         var request = new XMLHttpRequest();
         
        // Instantiating the request object
        request.open("GET", "https://cors-anywhere.herokuapp.com/https://ltv-data-api.herokuapp.com/api/v1/records.json?email=doesmith@example.com");

        request.onload = function () {
            // Begin accessing JSON data here

            if (request.status >= 200 && request.status < 400) {
                var data = JSON.parse(this.response);
                emailStr = data.email;
                sessionStorage.setItem("email", emailStr);
                description = data.description;
                sessionStorage.setItem("des", description);
                var name = data.first_name + ' ' + data.last_name;
                sessionStorage.setItem("name", name);
                var phoneNo = data.phone_numbers;
                sessionStorage.setItem("number", phoneNo);
                var address = data.address;
                sessionStorage.setItem("add", address);
                var rel = data.relatives;
                sessionStorage.setItem("relative", rel);


                var searchStr = document.getElementById('email').value;
                if(searchStr == emailStr){
                //  var url = "result.html?des=" + description;
                $(".transparentCover").hide(); 
                $(".loading").hide(); 
                  location.href= "result.html";        
               
                }
                else{
                  $(".loading").hide(); 
                    alert('error');
                }
            
              } else {
                $(".loading").hide(); 
                console.log('error')
              }
            }
      
      
      // Send request
      request.send()
      
        
        
      }

      
  