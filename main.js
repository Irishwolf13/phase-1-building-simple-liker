// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const myHearts = document.querySelectorAll('li.like');

myHearts.forEach((item) => {
  item.addEventListener('click', clickEvent)
});

function clickEvent(myTarget) {
  mimicServerCall()
  .then((response) => {
    switch (myTarget.target.innerHTML) {
      case FULL_HEART:
        myTarget.target.innerHTML = EMPTY_HEART
        myTarget.target.className = "like-glyph"
        break;
      case EMPTY_HEART:
        myTarget.target.innerHTML = FULL_HEART
        myTarget.target.className = "like-glyph activated-heart"
        break;
    }
  })
  .catch((response) => {
    const errorDiv = document.querySelector('div.hidden')
    errorDiv.innerHTML = response;
    errorDiv.className = ''
    setTimeout(() => {
      errorDiv.className = 'hidden'
    }, 3000)
  })
}
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
