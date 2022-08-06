let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/example1.jpg') {
        myImage.setAttribute('src', 'images/example2.jpg');
    } else {
        myImage.setAttribute('src', 'images/example1.jpg');
    }

}