const dodger = document.getElementById('dodger');

function moveDodgerLeft(e) {
    dodger.style.left = "-180px";
}

dodger.addEventListener('click', moveDodgerLeft);

function moveDodgerRight(e) {
    dodger.style.left = "360px"

}

dodger.addEventListener('click', moveDodgerRight)
