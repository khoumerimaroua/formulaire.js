
function validateForm() {
    // Récupération de la valeur du champ FirstName
    var fname = document.getElementById("fname").value;

     // Récupération de la valeur du champ LastName
    var lname = document.getElementById("lname").value;
    
    // Récupération de la date de naissance
    var birthdate = document.getElementById("birthdate").value;
    var email = document.getElementById("email").value;
    // Calcul de l'âge en années
    var age = new Date().getFullYear() - new Date(birthdate).getFullYear();


    
    if (fname == "") {
        alert("Le champ First Name est obligatoire");
        return false;
    }
    // Vérification de la longueur du champ First Name
      if  (fname.length < 3) {
        alert("Le champ First Name doit contenir au moins 3 caractères");
        return false;
      }
      if (lname == "") {
        alert("Le champ Last Name est obligatoire");
        return false;
      }
       // Vérification de la longueur du champ Last Name
    if (lname.length < 3) {
        alert("Le champ Last Name doit contenir au moins 3 caractères");
        return false;
      }
      if (birthdate == "") {
        alert("Le champ Birthdate est obligatoire");
        return false;
    }
      // Vérification de l'âge
      if (age < 18) {
        alert("Vous devez avoir au moins 18 ans pour vous inscrire");
        return false;
      }
      
      if (email == "") {
          alert("Le champ Email est obligatoire");
          return false;
        }
        // Si l'âge est valide, on peut soumettre le formulaire
        return true;
}  

  
  