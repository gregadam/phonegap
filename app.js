function capturePhoto() {  
    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
      destinationType: Camera.DestinationType.FILE_URI });
}

function onSuccess(imageData) {
    alert('Success');
    var image = document.getElementById('smallImage');
    image.src = "data:image/jpeg;base64," + imageData;
}

function onFail(message) {
    alert('Failed because: ' + message);
}


