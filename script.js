var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs((slideIndex += n));
}

function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName
    ('img-slideshow');
    if (n > imgList.length) slideIndex = 1;
    else if (n < 1) slideIndex =imgList.length;

    for (i = 0; i <imgList.length; i++) {
        imgList[i].style.display = 'none';
    }

    imgList[slideIndex - 1].style.display = 'block';
}

function validateForm() {
    var name = document.forms['contact-form'] ['name'].value;
    var email = document.forms['contact-form'] ['email'].value;
    var select = document.forms['contact-form'] ['select'].value;
    //validate input
    if (name == '' || email == '' || select == '') {
        alert('Input tidak boleh kosong');
        return false;
    }
}