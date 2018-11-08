function playSound(e) {
    // listen for an audio for that specific key using keyCode 
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return; // stop the function from running if there is no key with specified keyCode    
    // console.log(audio); 
    audio.currentTime = 0; // rewind to the start
    audio.play();

    // select the corresponding key to add the animation that we have (refer to css)
    // select an element with the class of 'key'
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // adds the css style to element with class "playing"
    // adds a yellow border
    key.classList.add('playing'); // same as writing jquery: key.addClass('playing');
  }

  // we want to get rid of yellow border at the end of each transition
  function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip it if it's not a transform
    // console.log(e);
    // console.log(e.propertyName);
    // console.log(this) // 'this' is equal to the actual key
    // remove the class of 'playing' once the transitionend is fired 
    this.classList.remove('playing');
  }

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition))

  // listening for a key down event
  // take the element we're listening for, in this case the window, 
  // and add an event listener that calls the function(e)
  window.addEventListener('keydown', playSound);