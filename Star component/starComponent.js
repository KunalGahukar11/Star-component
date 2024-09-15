let limit = 0;

const mouseOverHandler = (event) => {
    if (event.target.classList.contains('star')) {
        let idx = parseInt(event.target.dataset.index);
        updateStar(idx);
    }
};

const mouseOutHandler = (event) => {
    if (event.target.classList.contains('star')) {
        updateStar(limit);
    }
};

const updateRating = (event) => {
    if (event.target.classList.contains('star')) {
        let idx = parseInt(event.target.dataset.index);
        limit = idx;
        // console.log(`u ${idx}`);
        // console.log(`u ${limit}`);
        updateStar(idx);
        let count = query('#count');
        count.innerText = idx;
    }
}

const updateStar = (idx) => {
    let stars = queryAll('.star');
    for (let i = 0; i < stars.length; i++) {
        stars[i].classList.remove('star-filled');
    }

    for (let i = 0; i < idx; i++) {
        stars[i].classList.add('star-filled');
    }
}

// helper methods
const query = (selector) => document.querySelector(selector);
const queryAll = (selector) => document.querySelectorAll(selector);

const setUpListener = () => {
query('#star-container').addEventListener('click', updateRating);
query('#star-container').addEventListener('mouseover', mouseOverHandler);
query('#star-container').addEventListener('mouseout', mouseOutHandler);
};

const starComponentInit = () => {
    setUpListener();
};

starComponentInit();