export const radioPlayerInit = () => {
    const radio = document.querySelector('.radio');
    const radioCoverImg = document.querySelector('.radio-cover__img');
    const radioHeaderBig = document.querySelector('.radio-header__big');
    const radioNavigation = document.querySelector('.radio-navigation');
    const radioItems = document.querySelectorAll('.radio-item');
    const radioStop = document.querySelector('.radio-stop');

    const audio = new Audio();
    audio.type = 'audio/aac';

    radioStop.disabled = true;

    const changeIconPlay = () => {
        if (audio.paused) {
            radio.classList.remove('play');
            radioStop.classList.add('fa-play');
            radioStop.classList.remove('fa-stop');
        } else {
            radio.classList.add('play');
            radioStop.classList.add('fa-stop');
            radioStop.classList.remove('fa-play');
        }
    };

    const selectItem = elem => {
        radioItems.forEach(item => item.classList.remove('select'))
        elem.classList.add('select');
    };

    radioNavigation.addEventListener('change', ({ target }) => {
        const parrent = target.closest('.radio-item');
        selectItem(parrent);

        radioHeaderBig.textContent = parrent.querySelector('.radio-name').textContent;

        radioCoverImg.src = parrent.querySelector('.radio-img').src;

        audio.src = target.dataset.radioStantion;
        radioStop.disabled = false;
        audio.play();
        changeIconPlay();
    });

    radioStop.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }

        changeIconPlay();
    });
}