// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// global variables
const like = document.getElementsByClassName("like-glyph");
const errorMessage = document.getElementById('modal');
errorMessage.setAttribute('class', 'hidden')



// Your JavaScript code goes here!
function likeCallback(e) {
  const heart = e.target;
  mimicServerCall()
  .then(() => {
    if ( heart.innerText === EMPTY_HEART) {
      heart.innerText = FULL_HEART;
      heart.className = "activated-heart";
    } else {
      heart.innerText = EMPTY_HEART;
      heart.className = "";
    }
})
.catch((error) => {
  errorMessage.removeAttribute("class")
  let h2 = errorMessage.querySelector("h2")
  h2.innerText = "Error!, Random server error. Try again."
  setTimeout(() => {
    errorMessage.setAttribute('class', 'hidden')
  }, 3000)
})
}



for (i = 0; i < like.length; i++) {
  like[i].addEventListener('click', likeCallback);
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
