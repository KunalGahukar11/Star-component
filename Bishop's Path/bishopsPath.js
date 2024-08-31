class BishopPath {
    constructor(board,checkBoxes) {
        this.board = document.querySelector(board);
        this.checkBoxes = document.querySelectorAll(checkBoxes);

        this.trackArr = [];
        this.flag = 0;
        this.myMap = new Map();

        this.get2DStructure = this.get2DStructure.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
        this.getTrack = this.getTrack.bind(this);

        this.board.addEventListener('click', (event) => {
            if (event.target.classList.contains('checkbox')) {
                this.flag = 0;
                this.trackArr.forEach((checkBox) => {
                    if (this.myMap.has(checkBox.id)) {
                        checkBox.style.backgroundColor = this.myMap.get(checkBox.id);
                    }
                });
                this.myMap.clear();
                this.trackArr = [];

                let coordinates = this.getCoordinates(event.target.id);
                // console.log(coordinates);
                let chessBoard = this.get2DStructure();
                // console.log(chessBoard);
                    this.getTrack(coordinates,chessBoard,'top-left');
                    this.flag = 1;
                    this.getTrack(coordinates,chessBoard,'top-right');
                    this.getTrack(coordinates,chessBoard,'bottom-left');
                    this.getTrack(coordinates,chessBoard,'bottom-right');
                // console.log(this.trackArr);

                this.trackArr.forEach((checkBox) => {
                    let id = checkBox.id;
                    let color = checkBox.style.backgroundColor;

                    this.myMap.set(id,color);
                    checkBox.style.backgroundColor = 'red';
                });
            }
        });
    };

    getTrack = (coordinates,chessBoardArray,direction) => {
        let [x,y] = coordinates;

        if (this.flag === 0) {
            this.trackArr.push(chessBoardArray[x][y]);
        }

        while (true) {
            if (direction === 'top-left') {
                x--;
                y--;
            }else if (direction === 'top-right') {
                x--;
                y++;
            }else if (direction === 'bottom-right') {
                x++;
                y++;
            }else {
                x++;
                y--;
            }

            if (x < 0 || y < 0 || x >= chessBoardArray.length || y >= chessBoardArray.length) {
                break;
            }

            this.trackArr.push(chessBoardArray[x][y]);
        }
    };

    get2DStructure = () => {
        let chessBoardArray = [];

        for (let i = 0; i < 8; i++) {
            let tempArray = Array.from(this.checkBoxes[i].children);
            chessBoardArray.push(tempArray);
        }

        return chessBoardArray;
    };

    getCoordinates = (id) => {
        let val = 0;

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                val++;
                if (val === parseInt(id)) {
                    return [i,j];
                }
            }
        }
    };
};

new BishopPath('.board','.row');