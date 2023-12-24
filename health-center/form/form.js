

document.querySelector(".informations").style.display = "none";

window.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('form');
    const paragraphs = document.querySelectorAll('p');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const name = document.querySelector('#name').value;
      const surname = document.querySelector('#surname').value;
      const dadname = document.querySelector('#dadname').value;
      const fincode = document.querySelector('#Fincode').value;
      const telNumber = document.querySelector('#telNumber').value;
      const cins = document.querySelector('input[name="cins"]:checked').value;
      const doctor = document.querySelector('#doctor').value;
      const tarix = document.querySelector('#tarix').value;
      const vaxt = document.querySelector('#vaxt').value;
      
 document.querySelector(".inputs").style.display = "none";
 
 document.querySelector(".informations").style.display = "block";
      document.querySelector(".informations").innerHTML = `
      <h1>Müraciətiniz qeydə alındı!</h1>
      <h3>Qeydiyyat məlumatlarınız:</h3><br>
      <div class="columns">
          <div class="leftcolumn">
              <div >
                  <p><i class="fa-solid fa-user"></i> Adınız: </p>
              </div>
              <div >
                  <p><i class="fa-solid fa-user"></i> Soyadınız: </p>
              </div>
              <div >
                  <p><i class="fa-solid fa-user"></i> Ata adınız: </p>
              </div>
              <div >
                  <p><i class="fa-solid fa-address-card fa-beat"></i> Fin Kodunuz: </p>
              </div>
              <div >
                  <p><i class="fa-solid fa-phone fa-shake"></i> Telefon nömrəniz: </p>
              </div>
              <div >
                  <p><i class="fa-solid fa-user"></i>  Cinsiniz: </p><p id="cins"></p>
              </div>
              <div >
                  <p><i class="fa-solid fa-user-doctor"></i>  Həkimin: ${doctor}</p>
              </div>
              <div >
                  <p><i class="fa-solid fa-user-doctor"></i>  Filial: ${doctor}</p>
              </div>
              <div >
                  <p><i class="fa-regular fa-calendar-days"></i>  Tarix: </p>
              </div>
              <div >
                  <p><i class="fa-solid fa-clock"></i>  Saat: </p>
              </div>
          </div>
          <div class="rightcolumn">
                <p>${name}</p>
                <p>${surname}</p>
                <p>${dadname}</p>
                <p>${fincode}</p>
                <p>${telNumber}</p>
                <p>Kişi</p>
                <p>Gülay Məmmədli, Psixoloq</p>
                <p>28 May filialı</p>
                <p>${tarix}</p>
                <p>${vaxt}</p>
            </div>
      </div>` 
    }); //${cins}
  });
  