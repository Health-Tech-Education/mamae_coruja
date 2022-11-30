const btnForm = document.querySelector('.butao');

btnForm.addEventListener('click', (event) => {
    event.preventDefault();
    this.location.href = this.location.href.slice(0, -24).concat('information_feed/');
});
