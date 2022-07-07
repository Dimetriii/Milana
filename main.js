const startGame = document.querySelector('.wrapper-btn__start');
const startGameOpen = document.querySelector('.wrapper-btn___next-buttons');
startGame.addEventListener('click', function () {
    startGame.classList.toggle('active')
    startGameOpen.classList.toggle('active')
    document.querySelector('.question-words').innerHTML = 'Как думаешь тебя сильно любят ?'
})


const firstBtn = document.querySelector('.wrapper-btn__fitst');

firstBtn.addEventListener('click', function () {
    document.querySelector('.question-words').innerHTML = 'Ты самая краисвая и бомбическая бомба ???'

    const btn2 = document.querySelector('.wrapper-btn__fitst');

    firstBtn.addEventListener('click', function () {
        document.querySelector('.question-words').innerHTML = 'Кто проживает на дне океана ?'
        document.querySelector('.wrapper-btn__fitst').innerHTML = 'Спанч Боб Скверпенс'
        document.querySelector('.wrapper-btn__secong').innerHTML = 'Спанч Боб Скверпенс'
        document.querySelector('.wrapper-btn__third').innerHTML = 'Спанч Боб Скверпенс'

        const btn3 = document.querySelector('.wrapper-btn__fitst');

        firstBtn.addEventListener('click', function () {
            document.querySelector('.question-words').innerHTML = 'Вы чувствуете себя удовлетворенной с Димасиком ?'
            document.querySelector('.wrapper-btn__fitst').innerHTML = 'Да'
            document.querySelector('.wrapper-btn__secong').innerHTML = 'Нет'
            document.querySelector('.wrapper-btn__third').innerHTML = 'Не знаю'

            const btn4 = document.querySelector('.wrapper-btn__fitst');

            firstBtn.addEventListener('click', function () {
                document.querySelector('.question-words').innerHTML = 'Вас очень сильно любят!!!'
            })
        })
    })

})

const secondBtn = document.querySelector('.wrapper-btn__secong');

secondBtn.addEventListener('click', function () {
    document.querySelector('.question-words').innerHTML = 'Ты самая краисвая и бомбическая бомба ???'
    const btn2 = document.querySelector('.wrapper-btn__fitst');

    secondBtn.addEventListener('click', function () {
        document.querySelector('.question-words').innerHTML = 'Кто проживает на дне океана ?'
        document.querySelector('.wrapper-btn__fitst').innerHTML = 'Спанч Боб Скверпенс'
        document.querySelector('.wrapper-btn__secong').innerHTML = 'Спанч Боб Скверпенс'
        document.querySelector('.wrapper-btn__third').innerHTML = 'Спанч Боб Скверпенс'

        const btn3 = document.querySelector('.wrapper-btn__fitst');

        secondBtn.addEventListener('click', function () {
            document.querySelector('.question-words').innerHTML = 'Вы чувствуете себя удовлетворенной с Димасиком ?'
            document.querySelector('.wrapper-btn__fitst').innerHTML = 'Да'
            document.querySelector('.wrapper-btn__secong').innerHTML = 'Нет'
            document.querySelector('.wrapper-btn__third').innerHTML = 'Не знаю'

            const btn4 = document.querySelector('.wrapper-btn__fitst');

            secondBtn.addEventListener('click', function () {
                document.querySelector('.question-words').innerHTML = 'Вас очень сильно любят!!!'
            })
        })
    })
})


const thirddBtn = document.querySelector('.wrapper-btn__third');


thirddBtn.addEventListener('click', function () {
    document.querySelector('.question-words').innerHTML = 'Подумай хорошенько !'
})