const envelope = document.querySelector(".envelope-wrapper");
const heart = document.querySelector(".heart");
const letter = document.getElementById("letter");
const flipbook = document.getElementById("flipbook");

function adjustFlipbookSize() {
    const screenWidth = window.innerWidth;
    let flipbookWidth, flipbookHeight;

    if (screenWidth > 1024) {
        flipbookWidth = screenWidth * 0.7;
        flipbookHeight = flipbookWidth * 2 / 3;
    } else if (screenWidth > 768) {
        flipbookWidth = screenWidth * 0.9;
        flipbookHeight = flipbookWidth * 4 / 5;
    } else {
        flipbookWidth = screenWidth * 0.98;
        flipbookHeight = flipbookWidth * 5/6;
    }

    $('#flipbook').turn("size", flipbookWidth, flipbookHeight);
}

// envelope.addEventListener("click", () => {
window.onload = function() {
    envelope.classList.toggle("flap");
  
    setTimeout(() => {
      envelope.style.transform = "translateY(-100px)";
  
      setTimeout(() => {
        letter.classList.add("fade-out");

          flipbook.classList.remove("hidden");
          setTimeout(function() {
            flipbook.classList.add("visible");
          }, 100);
  
          
          const screenWidth = window.innerWidth;
          let flipbookWidth, flipbookHeight;
      
          if (screenWidth > 1024) {
            flipbookWidth = screenWidth * 0.7;
            flipbookHeight = flipbookWidth * 2 / 3; 
            } else if (screenWidth > 768) {
                flipbookWidth = screenWidth * 0.9;
                flipbookHeight = flipbookWidth * 4 / 5;
            } else {
                flipbookWidth = screenWidth * 0.98;
                flipbookHeight = flipbookWidth * 5/6;
            }

          $('#flipbook').turn({
            width: flipbookWidth,
            height: flipbookHeight,
            autoCenter: true,
            duration: 3500
          });
            setTimeout(function(){
              $('#flipbook').turn("next");
          }, 2000);
      }, 4000);
    }, 1000);
  };
  window.addEventListener('resize', adjustFlipbookSize);

  page1.addEventListener("click", () => {
    $('#flipbook').turn("next");
  });

  page2.addEventListener("click", () => {
    $('#flipbook').turn("previous");
  });