function showDropdown() {
  var dropdown = document.getElementById("myDropdown");
  var dropbtn = document.getElementsByClassName("dropbtn")[0];
  dropdown.style.display = "block";
  dropdown.classList.remove("hide"); // Hapus kelas 'hide'
  
  
}

function hideDropdown() {
  var dropdown = document.getElementById("myDropdown");
  var dropbtn = document.getElementsByClassName("dropbtn")[0];
  dropdown.classList.add("hide"); // Tambahkan kelas 'hide'
}


function cancelHide() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.remove("hide");
  }
  
  let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change slide every 3 seconds
}
