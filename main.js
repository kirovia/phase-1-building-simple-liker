// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// grabbing some elements from the DOM

const likes = document.querySelectorAll('.like');
const hearts = document.querySelectorAll('.like-glyph');
const modal = document.getElementById('modal');

// some functions

const toggleHeart = (heart) => {
  mimicServerCall()
    .then(resp => {
      if (resp) {
        if (heart.classList.contains('activated-heart')) {
          heart.textContent = EMPTY_HEART;
          heart.classList.remove('activated-heart');
        } else {
          heart.textContent = FULL_HEART;
          heart.classList.add('activated-heart');
        }
      }
    })
    .catch(error => {
      modal.classList.remove('hidden');
      setTimeout(() => modal.classList.add('hidden'), 3000);
    });
};
const click = element => element.addEventListener('click', function() {
  toggleHeart(this.firstElementChild)
});

// add click functionality to each like button

likes.forEach(element => click(element));

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
