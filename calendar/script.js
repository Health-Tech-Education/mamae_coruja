const mouthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
const mouthWith31Days = ['Janeiro', 'Março', 'Maio', 'Julho', 'Agosto', 'Outubro', 'Dezembro'];

const mouth = document.querySelector('#mouth');
const year = document.querySelector('#year');
const previousYear = document.querySelector('#arrow-year-left');
const nextYear = document.querySelector('#arrow-year-right');
const previousMouth = document.querySelector('#arrow-mouth-left');
const nextMouth = document.querySelector('#arrow-mouth-right');
const modal = document.querySelector('#modal');
const closeModal = document.querySelector('#close-modal');

const date = new Date();

const today = document.getElementById(date.getDate());
today.classList.add('today');

function setDayOnWeek() {
    const firstCalendarElement = document.getElementById('1');
    const secondeFromTheLastCalendarElement = document.getElementById('30');
    const lastCalendarElement = document.getElementById('31');
    const firstDate = new Date(date);

    firstDate.setDate(1);

    const numberOfDay = firstDate.getDay() + 1;

    firstCalendarElement.style.gridColumn = numberOfDay;

    if (!mouthWith31Days.includes(mouth.innerHTML)) {
        lastCalendarElement.style.display = 'none';

        if (mouth.innerHTML === 'Fevereiro') {
            secondeFromTheLastCalendarElement.style.display = 'none';
        }
    } else {
        lastCalendarElement.style.display = 'block';
        secondeFromTheLastCalendarElement.style.display = 'block';
    }
}

year.innerHTML = date.getFullYear();
mouth.innerHTML = mouthNames[date.getMonth()];
setDayOnWeek();

function setYear(next) {
    year.innerHTML = next === 'next'
        ? parseInt(year.innerHTML) + 1
        : parseInt(year.innerHTML) - 1;

    date.setFullYear(year.innerHTML);
    setDayOnWeek();
}

previousYear.addEventListener('click', setYear);

nextYear.addEventListener('click', () => setYear('next'));

function setMouth(next) {
    let newMouth = next === 'next'
        ? mouthNames.findIndex(element => element === mouth.innerHTML) + 1
        : mouthNames.findIndex(element => element === mouth.innerHTML) - 1;

    date.setMonth(newMouth);

    if (mouthNames[newMouth] === undefined) {
        mouth.innerHTML = mouthNames[next === 'next' ? 0 : 11];
        return setYear(next);
    }

    mouth.innerHTML = mouthNames[newMouth];
    setDayOnWeek();
}

previousMouth.addEventListener('click', setMouth);

nextMouth.addEventListener('click', () => setMouth('next'));

function teste(id) {
    const newAppointmentDate = document.querySelector('#new-appointment-date');
    const date = `${id} de ${mouth.innerHTML} de ${year.innerHTML}`;

    newAppointmentDate.innerHTML = date;
    modal.style.display = 'flex';
}

closeModal.addEventListener('click', () => modal.style.display = 'none');
