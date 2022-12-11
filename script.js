/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  
  // function sendEmail() {
  //   Email.send({
  //       Host : "smtp.mailtrap.io",
  //       Username : "2ecb8706513f63",
  //       Password : "72a287f2c91c58",
  //       To : 'kmahamadou858@gmail.com',
  //       From : "kmahamadou858@gmail.com",
  //       Subject : "Test email",
  //       Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
  //   }).then(
  //     message => alert("message envoyé avec succès")
  //   );
  //   }

  function sendEmail(){
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };


    const serviceID = "service_oqkdz9f";
    const templateID = "template_w6z6ude";
  
    emailjs.send(serviceID,templateID,params)
    .then(
      res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Message envoyé avec succès")
      })
      .catch((err) => console.log(err));

  }


  function test(){
     // Get the container element
var btnContainer = document.getElementById("myDIV");

// Get all buttons with class="btn" inside the container
var btns = document.querySelectorAll(".btn");

console.log(btns.length);

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  console.log("test test");
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("activem");
    current[0].className = current[0].className.replace(" activem", "");
    this.className += " activem";
  });
}
  }





  function menu(){
    // Get the container element
var items = document.querySelectorAll(".itemprojet");

var tout = document.querySelectorAll(".toutProjets");
var perso = document.querySelectorAll(".personnelsProjets");
var pro = document.querySelectorAll(".professionnelsProjets");

var toutvalue = document.querySelectorAll(".contenuToutProjets");
var persovalue = document.querySelectorAll(".contenuPersonnelsProjets");
var provalue = document.querySelectorAll(".contenuProfessionnelsProjets");




// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function() {
    if(this.classList.contains('toutProjets')){
      toutvalue[0].style.display = "grid";
      persovalue[0].style.display = "grid";
      provalue[0].style.display = "grid";
    }else if(this.classList.contains('personnelsProjets')){

      toutvalue[0].style.display = "none";
      persovalue[0].style.display = "grid";
      provalue[0].style.display = "none";


    }else if(this.classList.contains('professionnelsProjets')){

      toutvalue[0].style.display = "none";
      persovalue[0].style.display = "none";
      provalue[0].style.display = "grid";
      
    }
   var current = document.getElementsByClassName("projetactive");
   current[0].className = current[0].className.replace(" projetactive", "");
   this.className += " projetactive";
 });
}
 }

 

 