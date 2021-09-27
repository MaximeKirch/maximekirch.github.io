// Responsive Menu 

    function toggleMenu() {

        //Get element 
        var x = document.getElementById("menu");

        var menu = document.querySelector('.fa');

        //Condition d'affichage 
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }

       if(x.style.display === 'block') {
           menu.innerHTML = 'x'
       } else {
           menu.innerHTML = '≡'
       }
      }

