


// Add click event listener to each button with a unique ID
  document.getElementById('singleBurgerButton').addEventListener('click', function() {
    showBurgerAlert('10$');
  });

  document.getElementById('doubleBurgerButton').addEventListener('click', function() {
    showBurgerAlert('12$');
  });

document.getElementById('3burgerButton').addEventListener('click', function() {
    showBurgerAlert('4$');
  });
document.getElementById('4burgerButton').addEventListener('click', function() {
    showBurgerAlert('5$');
  });



  function showBurgerAlert(amount) {
    // Using SweetAlert2 to create a customized alert
    Swal.fire({
      title: 'Burger!',
      html: `<p>Amount: ${amount}</p><img src="img/burger.jpg" alt="Burger Photo" style="max-width:100%;">`,
      confirmButtonText: 'Purchase!',
              position: 'center',

      customClass: {
        container: 'my-swal', // Apply the custom style to the SweetAlert2 modal only
      },
    });
  }



if ('speechSynthesis' in window) {
    const textToSpeak = [
       "WELCOME TO BURGER RESTUARNT DEVELOPED BY MR.WEYINMI", 
    "GO THROUGH SOME OF OUR BEST BURGERS",
    "WE OFFER YOU SOME OF THE CHEAPEST AND AFFORDABLE PRICES",
    "ALSO FASTEST CHEAPING AND TRANSPORTING OF GOODS"];

    const speechSynthesis = window.speechSynthesis;

    function speakText(index) {
        if (index < textToSpeak.length) {
            const text = new SpeechSynthesisUtterance(textToSpeak[index]);
            speechSynthesis.speak(text);

            text.onend = function () {
                speakText(index + 1);
            };
        }
    }

    window.addEventListener('load', function () {
        speakText(0);
    });
}

