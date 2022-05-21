// Add your code here
 function submitData(userName, userEmail){
     console.log("Hello Fetch")



     const userData ={
         name: userName,
         email:userEmail
     };

     const configurationObject ={
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            Accept:"application/json",
         },
         body:JSON.stringify(userData),
        };

        return fetch("http://localhost:3000/users", configurationObject)
        .then(function (response){
            return response.json();

        })
        .then(function (object) {
            //console.log (object);
            let idUserData =document.createElement("div")
            idUserData.id = object.id
            idUserData.textContent =object['id']
            document.body.append(idUserData);

            //document.body.innerHTML = object["id"]
            console.log("hello")
        })

        .catch(function (error) {
            alert("Unauthorized Access")
            //document.body.innerHTML =error.message
            //console.log(error.message)
             let div = document.getElementsByTagName("div")[10]
             let par = document.createElement("p")
             par.innerHTML = error. message
             div.appendChild(par)
              //document.body.append(div)

              //div.innerHTML = error.message

        })

    }

    submitData();


     



    