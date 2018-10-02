function moveBoy(e){

    let boy = document.getElementById("boy");
    let circle = document.getElementById("circle");

    let cs = window.getComputedStyle(circle);

    let left = parseInt(cs.marginLeft);
    let top = parseInt(cs.marginTop);

    let topArray = [[77,91],[77,161],[77,231],[147,231],[217,91],[287,161],[287,231],[357,231],[427,371],[427,441]];
    let rightArray = [[77,21],[147,21],[217,91],[287,91],[147,161],[77,231],[357,231],[427,231],[357,371],[287,371]];
    let bottomArray = [[7,91],[7,161],[7,231],[77,231],[147,91],[217,161],[217,231],[287,231],[357,371],[357,441]];
    let leftArray = [[77,91],[147,91],[147,231],[77,301],[217,161],[287,161],[357,301],[427,301],[287,441],[357,441]];



    switch(e.keyCode){

        case 37:  // если нажата клавиша влево
            if(left > 21){
                for (let i = 0; i < leftArray.length; i++){
                    if(leftArray[i][0] === top && leftArray[i][1] === left){
                        boy.src = './images/boy-left.png';
                        return;
                    }
                }
                circle.style.marginLeft = left - 70 + "px";
                boy.src = './images/boy-left.png';
            }
            break;
        case 38:   // если нажата клавиша вверх
            if(top > 35){
                for (let i = 0; i < topArray.length; i++){
                    if(topArray[i][0] === top && topArray[i][1] === left){
                        boy.src = './images/boy-back.png';
                        return;
                    }
                }
                circle.style.marginTop = top - 70 + "px";
                boy.src = './images/boy-back.png';
            }
            break;
        case 39:   // если нажата клавиша вправо
            if( left < 380){
                for (let i = 0; i < rightArray.length; i++){
                    if(rightArray[i][0] === top && rightArray[i][1] === left){
                        boy.src = './images/boy-right.png';
                        return;
                    }
                }
                boy.src = './images/boy-right.png';
                circle.style.marginLeft = left + 70 + "px";
            }
            break;
        case 40:   // если нажата клавиша вниз
            if(top < 380){
                for (let i = 0; i < bottomArray.length; i++){
                    if(bottomArray[i][0] === top && bottomArray[i][1] === left){
                        boy.src = './images/boy-front.png';
                        return;
                    }
                }
                circle.style.marginTop = top + 70 + "px";
                boy.src = './images/boy-front.png';
            }
            break;
    }
}

addEventListener("keydown", moveBoy);
