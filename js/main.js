// documentdan kerak bo'lgan elementlarni olib kelib oldik

var elForm = document.querySelector(".js-hero__form");
var elInput = elForm.querySelector(".js-hero__input");
var timePerson = document.querySelector(".js-hero__incoming");
var timeBike = document.querySelector(".js-hero__incoming--bike");
var timeCar = document.querySelector(".js-hero__incoming--car");
var timePlane = document.querySelector(".js-hero__incoming--plane");


// tezliklarni e'lon qilib oldik
var personSpeed = 3.6;
var bikeSpeed = 20.1;
var carSpeed = 70;
var planeSpeed = 800;

elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();
  
  // Inputni value sini oldik
  var elInputValue = Number(elInput.value);
  
  function findTime(speeds, outgoingText) {
    // vaqtni topish uchun masofani tezlikga bo'ldik
    var time = elInputValue / speeds;
    
    // Soatlarni aniqlab olish uchun vaqtni 60 daqiqaga bo'ldik
    var hours = Math.trunc(time);
    
    // Daqiqalarni topish uchun vaqtni 60 daqiqaga bo'lib soatlarni ayirib uni yana 60 daqiqa ko'paytirib daqiqalarni oldik
    var minutes = Math.round((time - hours) * 60);
    
    
    if(hours == 0) {
      // bizga kiritilgan argumentni textContentini argument textContenti ustida replace qilib  almashtirib qo'ydik 
      outgoingText.textContent = outgoingText.textContent.replace(outgoingText.textContent, `${minutes} daqiqa`);
    } else if(hours != 0 && minutes == 0) { 
      // daqiqamiz 0 ga teng bo'lsa faqat soatni o'zi ko'rsatilsin dedik
      outgoingText.textContent = outgoingText.textContent.replace(outgoingText.textContent, `${hours} soat`);
    } else {
      // agar soat ham daqiqa ham 0 ga teng bo'lmasa bu DOM ga bu chiqishini etdik
      outgoingText.textContent = outgoingText.textContent.replace(outgoingText.textContent, `${hours} soat ${minutes} daqiqa`);
    }
  }
  
  findTime(personSpeed, timePerson);
  findTime(bikeSpeed, timeBike);
  findTime(carSpeed, timeCar);
  findTime(planeSpeed, timePlane);
})