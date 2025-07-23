  function displayData(){
            
                var namesDiv = document.getElementById("name-input");
                if(namesDiv.value === ""){
                    alert("Invalid Name");
                    return false;
                }
                else{
                var namesDiv = document.getElementById("name-input");
                    }

                var ageDiv = document.getElementById("age-input");
                if((ageDiv.value === "")||(ageDiv.value < 12)){
                    alert("Invalid Age");
                    return false;
                }
                else{
                var ageDiv = document.getElementById("age-input");
                    }

                var cityDiv = document.getElementById("city-input");
                if(cityDiv.value === ""){
                    alert("Invalid City");
                    return false;
                }
                else{
                var cityDiv = document.getElementById("city-input");
                    }

                var emailDiv = document.getElementById("email-input");
                if(emailDiv.value === ""){
                    alert("Invalid Email");
                    return false;
                }
                else{
                var emailDiv = document.getElementById("email-input");
                    }

                var welcome_box = document.getElementById("entered-data");
                welcome_box.style.display = "flex";

                var user_info_p = document.getElementById("user-info");
                user_info_p.innerHTML = "Hello "+ namesDiv.value + "! The information you provided states: You are " + ageDiv.value + " years old. You are from " + cityDiv.value + ". Your account will be verfied using this email: " + emailDiv.value + ". Profile creation was succesful.";

            }
            