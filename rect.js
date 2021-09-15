function myFunction() {
    var boxB = document.getElementById("squareB");
    var boxY = document.getElementById("squareY");
    var box = document.getElementById("squareR");
    var pos = 0;
    var myVar = setInterval(move, 5);

    function move() {
        for (let i = 0; i < 9; i++) {
            if (pos == 600) {
                clearInterval(myVar);
            } else {
                pos++
                boxB.style.top = pos + 'px'
                boxB.style.bottom = pos + 'px'
                box.style.bottom = pos + 'px'
                box.style.right = pos + 'px'
                boxY.style.left = pos + 'px'
                boxY.style.top = pos + 'px'

            }

        }
        //carac()
    }




    function carac() {

    }
}