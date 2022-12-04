// #region STEP 2: OK
// Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2
// #endregion

(function (window) {
    // #region STEP 3: OK
    // Create an object, called 'helloSpeaker' to which you will attach
    // the "speak" method and which you will expose to the global context
    // See Lecture 52, part 1
    // #endregion
    var helloSpeaker = {};

    // DO NOT attach the speakWord variable to the 'helloSpeaker' object.
    var speakWord = "Hello";

    // #region STEP 4: OK
    // Rewrite the 'speak' function such that it is attached to the
    // helloSpeaker object instead of being a standalone function.
    // See Lecture 52, part 2
    // #endregion
    helloSpeaker.speak = function (name) {
        console.log(speakWord + " " + name);
    }

    // #region STEP 5: OK
    // Expose the 'helloSpeaker' object to the global scope. Name it
    // 'helloSpeaker' on the global scope as well.
    // See Lecture 52, part 2
    // (Note, Step 6 will be done in the SpeakGoodBye.js file.)
    // #endregion
     window.helloSpeaker = helloSpeaker;
})(window);