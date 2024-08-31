let chessBoard = document.querySelector('.board');
// console.log(chessBoard);

let checkBoxes = document.querySelectorAll('.row');

let myMap = new Map();
let trackArr = [];
let flag = 0;

chessBoard.addEventListener('click', (event) => {
    if (event.target.classList.contains('checkbox')) {
        flag = 0;
        trackArr.forEach((el) => {
            if (myMap.has(el.id)) {
                el.style.backgroundColor = myMap.get(el.id);
            }
        });
        myMap.clear();
        trackArr = [];
        
        // console.log(event.target.id);
        let coordinates = getCoordinates(event.target.id);
        let chessBoardArr = get2DStructure();
        
        // console.log(coordinates);
        // console.log(chessBoardArr);
        // topTrack(coordinates);
        // leftTrack(coordinates);
        // rightTrack(coordinates);
        // bottomTrack(coordinates);
        // console.log(trackArr);
        getTrackArr(coordinates,chessBoardArr,'top');
        flag = 1;
        getTrackArr(coordinates,chessBoardArr,'left');
        getTrackArr(coordinates,chessBoardArr,'right');
        getTrackArr(coordinates,chessBoardArr,'bottom');

        trackArr.forEach((el) => {
            let id = el .id;
            let color = el.style.backgroundColor;
            myMap.set(id,color);

            el.style.backgroundColor = 'red';
            // console.log(el.style.backgroundColor);
        });
    }
});


const get2DStructure = () => {
    let chessBoardArr = [];

    checkBoxes.forEach((row) => {
        let newArr = [];
        let col = Array.from(row.children);
        col.forEach((col) => {
            newArr.push(col);
        });
        chessBoardArr.push(newArr);
    });

    return chessBoardArr;
};

const getCoordinates = (event) => {
    let chessBoardArr = get2DStructure();
    // console.log(chessBoardArr);

    let val = 0;
    for (let i = 0; i < chessBoardArr.length; i++) {
        for (let j = 0; j < chessBoardArr.length; j++) {
            val++;
            // console.log(typeof val);
            // console.log(typeof event);
            if (parseInt(event) === val) {
                return [i,j];
            }
        }
    }
};

const getTrackArr = (coordinates,chessBoardArr,direction) => {
    let [x,y] = coordinates;

    if (flag === 0) {
        trackArr.push(chessBoardArr[x][y]);
    }

    while (true) {
        if (direction === 'top') {
            x--;
        }else if (direction === 'left') {
            y--;
        }else if (direction === 'right') {
            y++;
        }else {
            x++;
        }

        if (x < 0 || y < 0 || x >= chessBoardArr.length || y >= chessBoardArr.length) {
            break;
        }

        trackArr.push(chessBoardArr[x][y]);
    }
};


// const topTrack = (coordinates) => {
//     let chessBoardArr = get2DStructure();
//     // console.log(coordinates);
//     let x = coordinates[0];
//     let y = coordinates[1];

//     while (x >= 0) {
//         let el = chessBoardArr[x][y];
//         trackArr.push(el);
//         x--;
//     }
//     // console.log(trackArr);
// };

// const leftTrack = (coordinates) => {
//     let chessBoardArr = get2DStructure();
//     // console.log(coordinates);
//     let x = coordinates[0];
//     let y = coordinates[1];

//     y--;
//     while (y >= 0) {
//         let el = chessBoardArr[x][y];
//         trackArr.push(el);
//         y--;
//     }
//     // console.log(trackArr);
// };

// const rightTrack = (coordinates) => {
//     let chessBoardArr = get2DStructure();
//     // console.log(coordinates);
//     let x = coordinates[0];
//     let y = coordinates[1];

//     y++;
//     while (y < chessBoardArr.length) {
//         let el = chessBoardArr[x][y];
//         trackArr.push(el);
//         y++;
//     }
//     // console.log(trackArr);
// };

// const bottomTrack = (coordinates) => {
//     let chessBoardArr = get2DStructure();
//     // console.log(coordinates);
//     let x = coordinates[0];
//     let y = coordinates[1];

//     x++;
//     while (x < chessBoardArr.length) {
//         let el = chessBoardArr[x][y];
//         trackArr.push(el);
//         x++;
//     }
//     // console.log(trackArr);
// };

// const addToMap = (arr) => {
//     let myMap = new Map();

//     arr.forEach((item) => {
//         let color = item.style.backgroundColor;
//         let idx = item.id;

//         myMap.set(idx,color);
//     });

//     return myMap;
// };
