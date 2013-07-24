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

function captureSuccess(mediaFiles) {
    var i, path, len;
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
        path = mediaFiles[i].fullPath;
        // do something interesting with the file
    }
};

// capture error callback
function captureError(error) {
    navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
};

function captureAudio() {
	// start audio capture
	navigator.device.capture.captureAudio(captureSuccess, captureError, {limit:2});
}

