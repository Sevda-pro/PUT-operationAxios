// const myFunc=(id)=>{
    
//   axios.delete(`https://crudcrud.com/api/555dd1777c764eef89363ce82ab0edf9/Fordelete/ ${id}`)
//   .then((res)=>{
//    const elementToDelete = document.getElementById(`${id}`)
//    elementToDelete.remove();
//   }).catch((err)=>{
//   console.log(err);
//   })
// }
// window.addEventListener("DOMContentLoaded", makerequest);

// function makerequest() {
//   console.log("Button Clicked");

// //   config = {
// //     method:"get",
// //     url:"",
// //     //   id: "64c662c4c632b703e831093c"
// //     // id:"2"
    
// //   };

//   axios("https://crudcrud.com/api/555dd1777c764eef89363ce82ab0edf9/Fordelete")
//     .then((res) => {
//     //   console.log(res);
//       console.log(res.data);

//       let object = document.getElementById("add");
//       res.data.forEach(element => {
//         object.innerHTML += `
//           <p>${element.name}</p>
//           <p>${element.email}</p>
//           <p>${element._id} <button id="${element._id}" onclick="myFunc('${element._id}')"  >Delete</button></p><br><hr>
//         `;
//       });
//     })
//     .catch((error) => {
//       console.error(error);
//     });
   

// }



  // Define myFunc in the global scope
  // const myFunc = 

//   window.addEventListener("DOMContentLoaded", makerequest);

//   function makerequest() {
//     console.log("Button Clicked");

//     axios("https://crudcrud.com/api/2eba1af8de294d92837f3502e73580ef/newdata")
//       .then((res) => {
//         console.log(res.data);

//         let object = document.getElementById("add");
//         res.data.forEach((element) => {
//           // Create new elements for each data item
//           const nameElement = document.createElement("p");
//           nameElement.innerHTML = `<p class=${element._id}>${element.name}</p>`;

//           const emailElement = document.createElement("p");
//           emailElement.innerHTML =`<p class=${element._id}>${element.email}</p>`;

//           const idElement = document.createElement("p");
//           idElement.innerHTML = `<p class=${element._id}>${element._id}</p>`;
          
//           const deleteButton = document.createElement("button");
//           deleteButton.textContent = "Delete";
//           deleteButton.addEventListener("click", (e) => {
//             // e.preventDefault()
//             axios.delete(`https://crudcrud.com/api/2eba1af8de294d92837f3502e73580ef/newdata/${element._id}`)
//               .then((res) => {
//                 const elementToDelete = document.getElementsByClassName(`${element._id}`);
//                 elementToDelete.remove();
//               })
//               .catch((err) => {
//                 console.log(err);
//               });
//           });

//          idElement.appendChild(deleteButton);

//           const hrElement = document.createElement("hr");

//           // Append the new elements to the 'object' element
//           object.appendChild(nameElement);
//           object.appendChild(emailElement);
//           object.appendChild(idElement);
//           object.appendChild(hrElement);
//         });
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }
// // </script>
  // window.addEventListener("DOMContentLoaded", makerequest);

  window.addEventListener("DOMContentLoaded", (e)=>{


    axios("https://crudcrud.com/api/2402f09ea0b4448aa9a621f90c3164b7/newdata")
      .then((res) => {
        console.log(res.data);

        let object = document.getElementById("add");
        res.data.forEach((element) => {
          // Create new elements for each data item
          object.innerHTML += `
            <div id="${element._id}">
              <p>${element.name}</p>
              <p>${element.email}</p>
              <p>${element._id}</p>
              <button class="btn btn-primary" type="submit" onclick="myFunc('${element._id}')">Delete</button>
              <button class="btn btn-primary" type="button" onclick="editFunc('${element._id}', '${element.name}', '${element.email}')">Edit</button>
            </div>
          `;
        });
      })
      .catch((error) => {
        console.error(error);
      });
  

  
});
function myFunc(id) {
    axios.delete(`https://crudcrud.com/api/2402f09ea0b4448aa9a621f90c3164b7/newdata/${id}`)
      .then((res) => {
        const x = document.getElementById(id);
        if (x) {
          x.remove();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

function editFunc(id,name,email)
{
  const newName = prompt("Enter new name");
  const newEmail = prompt("Enter new email");

  config={
    method:'put',
    url:`https://crudcrud.com/api/2402f09ea0b4448aa9a621f90c3164b7/newdata/${id}`,
    data:{name:newName , email:newEmail}
  }
  axios(config)
  .then((res)=>{
    const x = document.getElementById(id);
        if (x) {
          x.innerHTML=`
          <div id="${id}">
          <p>${newName}</p>
          <p>${newEmail}</p>
          <p>${id}</p>
          <button class="btn btn-primary" type="submit" onclick="myFunc('${id}')">Delete</button>
          <button class="btn btn-primary" type="button" onclick="editFunc('${id}', '${name}', '${email}')">Edit</button>
        </div>`
        }
  })
}