

document.querySelector(".informations").style.display = "none";

window.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('form');
    const paragraphs = document.querySelectorAll('p');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const fincode = document.querySelector('#Fincode').value;
      const telNumber = document.querySelector('#telNumber').value;
      const doctor = document.querySelector('#doctor').value;
      const tarix = document.querySelector('#tarix').value;
      const vaxt = document.querySelector('#vaxt').value;
      
 document.querySelector(".inputs").style.display = "none";
 
 document.querySelector(".informations").style.display = "block";
      document.querySelector(".informations").innerHTML = `
      <div class="columns">
      <h1>Müayinə nəticələriniz bir neçə saat ərzinə nömrənizə göndəriləcək</h1><br>
      <h3>Həmişə sağlam olmağınız diləyi ilə!</h3>
      </div>` 
    }); //${cins}
  });
  