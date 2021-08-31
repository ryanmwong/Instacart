//selection-row-arrowFirst
//selection-row${i}-arrowFirst
//selection-row-arrowSecond
//selection-row${i}-arrowSecond

//selection-row-foods-firstPage
//selection-row${i}-first
//selection-row-foods-secondPage
//selection-row${i}-second

const firstPageButtons = document.querySelectorAll('.selection-row-arrowFirst');

for (let i=0; i<firstPageButtons.length; i++) {
    firstPageButtons[i].addEventListener('click', function() {
        const firstPage = document.querySelector(`.selection-row${i}-first`);
        const secondPage = document.querySelector(`.selection-row${i}-second`);
        firstPage.style.display = 'none';
        secondPage.style.display = 'flex';
    })
}

const secondPageButtons = document.querySelectorAll('.selection-row-arrowSecond');

for (let i=0; i<secondPageButtons.length; i++) {
    secondPageButtons[i].addEventListener('click', function() {
        const firstPage = document.querySelector(`.selection-row${i}-first`);
        const secondPage = document.querySelector(`.selection-row${i}-second`);
        firstPage.style.display = 'flex';
        secondPage.style.display = 'none';
    })
}

