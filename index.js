const div = document.querySelector('.left')
const span = document.querySelectorAll('span')

window.addEventListener("load", (event) => {
    document.querySelector(".button2").onclick = function () {
        location.reload(true);
    };
});

div.addEventListener('click', addQuestionToInput) 

function addQuestionToInput ()
{
let span = document.querySelectorAll('span');
[].forEach.call(span, (el) =>{
    el.onclick = function(event) {
    document.querySelector("input").value = el.innerText
    console.log(el.innerText)
    }
});
}



    // const btn=document.querySelector('.button is-primary is-warning')
    //     btn.addEventListener('click', reply)
    
    // function reply(addQuestionToInput, answers) {
    // const result = ''

    //         if (addQuestionToInput[i] === answers[i])
    //         {
    //         result =answers[i]
    //         }
    //     } 
    //     console.log(result)


// const divRight=document.querySelector('div')
// const right = document.querySelector(".right")
// const newDivRight=document.createElement('div')
// newDivRight.className=("right")
// right.append(newDivRight)


// let replyText=document.createElement('p')
// replyText.innerText = reply()
// newDivRight.append(replyText)




/*произвольный вопрос*/
// input.addEventListener('keydown', (event)=> {
//     if (event.key === 'Enter'){
//         reply()
//         input.value = ''

//  }
// })

// const allAnswers=[answers, randomAnswers]
const answers = {
    1:'Численность населения города по данным Росстата составляет 13 015 126 человек (2022). Из них 12 455 682 — городское население, 199 368 — сельское.',
    2:'Численность населения города по данным Росстата составляет 5 384 342 чел. (2021). Плотность населения — 3837,73 чел./км 2 (2021). Без учёта выделяемых отдельно населённых пунктов в составе Санкт-Петербурга, общая численность населения муниципальных округов города составляет 4 542 813 чел.',
    3:'Население — 1 136 709 чел. (2022), восьмой по численности населения город России. В пределах агломерации (третьей по численности населения в России) проживает свыше 2,7 млн человек. ',
    4:'Численность населения города Тюмени по состоянию на 1 января 2021 года – 816,7 тыс. человек.',
    
}
    const randomAnswers = {
        1: 'О возможности существования жизни на Марсе люди размышляли веками из-за близости планеты и её сходства с Землёй. Поиск признаков жизни начался в XIX веке и продолжается по настоящее время. С 1960-х годов телескопические наблюдения дополнили запуски автоматических межпланетных станций для изучения планеты, вначале с пролётной траектории, а затем с орбиты искусственного спутника.',
        2: 'Устаревшая гипотеза, по которой Земля представляет собой плоский диск. Концепция плоской Земли присутствовала в космогонической мифологии многих народов древности, в частности, древних египтян, вавилонян, в раннем индуизме, буддизме.',
        3: 'В нашей галактике существует примерно от 100 до 400 миллиардов звезд. По версии телескопа «Хаббл», сейчас найдено около 100 миллиардов галактик, и считается, что вскоре их будет найдено еще 100 миллиардов.',
        4: 'Совокупность светил, видимых ночью на небесном своде. В основном это звёзды. Невооружённым глазом можно различить звёзды до 5-6 звёздной величины.',
    };