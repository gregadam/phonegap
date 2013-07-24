document.addEventListener("deviceready", onDeviceReady, false)

function onDeviceReady() {
	alert("Device is ready");
	recordAudio();
}

/*
	Capture Photo
*/

function capturePhoto() {  
    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.DATA_URL
    });
}

function onSuccess(imageData) {
    var image = document.getElementById('smallImage');
    image.src = "data:image/jpeg;base64," + imageData;
}

function onFail(message) {
    alert('Failed because: ' + message);
}

/*
	Capture audio
*/

// Record audio
//
function recordAudio() {
	alert("recordAudio() called");
    var src = "test.wav";
    var mediaRec = new Media(src,
        // success callback
        function() {

            alert(type, listener);("recordAudio():Audio Success");
        },

        // error callback
        function(err) {
            alert("recordAudio():Audio Error: "+ err.code);
        });

    // Record audio
    mediaRec.startRecord();
}
