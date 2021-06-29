const start = document.querySelector('.start');
const mStore = document.querySelector('.m-store');
const gMeet = document.querySelector('.g-meet');

start.addEventListener('click', () =>{
    document.querySelector('.menu').classList.toggle('active');
})
mStore.addEventListener('click', () =>{
    document.querySelector('.store').classList.toggle('active');
})
gMeet.addEventListener('click', () =>{
    document.querySelector('.meet').classList.toggle('active');
})
