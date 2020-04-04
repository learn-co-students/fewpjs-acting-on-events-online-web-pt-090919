let dodger = getElementById('dodger');
dodger.stlye.backgroungColor = '#FF69B4';
dodger.style.left;
dodger.style.bottom = '0px';


function moveDodgerLeft() {
    let leftNumber = dodger.style.left.replace('px', '');
    let left = parseInt(leftNumber, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    };
       document.addEventListener("keydown", function(e) {
            if (e.key === "ArrowLeft") {
                moveDodgerLeft();
            }
        });
}

function moveDodgerRight() {
    let leftNumber = dodger.style.left.replace('px', '');
    let left = parseInt(leftNumber, 10);

    if (left >= 179) {
        dodger.style.left = `${left + 1}px`;
    };

    document.addEventListener("keydown", function() {
        if (e.key === "ArrowRight") {
            moveDodgerRight()
        }
     });
}
