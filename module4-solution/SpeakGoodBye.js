// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// #region STEP 6: OK
// Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2
// #endregion
(function (window) {
    // #region STEP 7: OK
    // Create an object, called 'byeSpeaker' to which you will attach
    // the "speak" method and which you will expose to the global context
    // See Lecture 52, part 1
    // #endregion
    var byeSpeaker = {};

    // DO NOT attach the speakWord variable to the 'byeSpeaker' object.
    var speakWord = "Good Bye";

    // #region STEP 8: OK
    // Rewrite the 'speak' function such that it is attached to the
    // byeSpeaker object instead of being a standalone function.
    // See Lecture 52, part 2
    // #endregion
    byeSpeaker.speak = function (name) {
        console.log(speakWord + " " + name);
    }

    // #region STEP 9: OK
    // Expose the 'byeSpeaker' object to the global scope. Name it
    // 'byeSpeaker' on the global scope as well.
    //#endregion
     window.byeSpeaker = byeSpeaker;
})(window);