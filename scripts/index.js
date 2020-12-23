import { videoPlayerInit } from './videoPlayer.js';
import { radioPlayerInit } from './radioPlayer.js';
import { musicPlayerInit } from './musicPlayer.js';

const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');

const deactivationPlayer = () => {
    temp.style.display = 'none';
    playerBlock.forEach(item => item.classList.remove('active'));
    playerBtn.forEach(item => item.classList.remove('active'))
};

playerBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        deactivationPlayer();
        btn.classList.add('active');
        playerBlock[index].classList.add('active');
    });
});

videoPlayerInit();
radioPlayerInit();
musicPlayerInit();