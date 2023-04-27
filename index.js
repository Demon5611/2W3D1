//
const div = document.querySelector('.left')
//сбросить все 
window.addEventListener("load", (event) => {
    document.querySelector(".button2").onclick = function () {
        location.reload(true);
    };
});

div.addEventListener('click', addQuestionToInput) 
function addQuestionToInput (){
let res=''
let span = document.querySelectorAll('span');
[].forEach.call(span, (el) =>{
    el.onclick = function(event) {
    res=document.querySelector("input").value = el.innerText
        }
    });
return res
}


// не работает передача по INPUT + не отрабатывается передача вопроса по кнопке  GO, поэтому улетают в форму рандомные вопросы


// нужно передать введенный текст на переменную str
// let input= document.querySelector('input').value
// input.addEventListener("keydown", (event) => {
//     if (event.key === "Enter") {
//         let str = document.querySelector('input').value
//         console.log("yes_Enter working") // пропадает с экрана сразу после появления
//         const value = event.target.value
//         return str = value 
//     }

// });
  
const btn=document.querySelector('.buttons')
btn.addEventListener('click', reply)
    // отправляем ответ в правое поле
    const divRight = document.querySelector('div')
    const right = document.querySelector(".right")
    const newDivRight = document.createElement('div')
    newDivRight.className = ("right")
    right.append(newDivRight)
    let replyText = document.createElement('p')
    replyText.innerText = reply // здесь должно быть =reply() ?
    newDivRight.append(replyText);

const str='Какая численность населения Москвы ?' 


function reply(str)
{
    const questions1 = 'Какая численность населения Москвы ?' // length 36
    const questions2 = 'Какая численность населения Санкт-Петербурга ?' // 46
    const questions3 = 'Может Вас интересует численность населения Самары ?'     //  51
    const questions4 = 'Или численность населения Тюмени ?'     //  34
    
const answers1 = 'Численность населения города Москва, по данным Росстата, составляет 13 015 126 человек (2022). Из них 12 455 682 — городское население, 199 368 — сельское.'
const answers2 = 'Численность населения города Санкт-Петербург, по данным Росстата, составляет 5 384 342 чел. (2021). Плотность населения — 3837,73 чел./км 2 (2021). Без учёта выделяемых отдельно населённых пунктов в составе Санкт-Петербурга, общая численность населения муниципальных округов города составляет 4 542 813 чел.'
const answers3 = 'Население города Самара  — 1 136 709 чел. (2022), восьмой по численности населения город России. В пределах агломерации (третьей по численности населения в России) проживает свыше 2,7 млн человек.'
const answers4 = 'Численность населения города Тюмени по состоянию на 1 января 2021 года – 816,7 тыс. человек.'
    
let answers = [
    'О возможности существования жизни на Марсе люди размышляли веками из-за близости планеты и её сходства с Землёй. Поиск признаков жизни начался в XIX веке и продолжается по настоящее время. С 1960-х годов телескопические наблюдения дополнили запуски автоматических межпланетных станций для изучения планеты, вначале с пролётной траектории, а затем с орбиты искусственного спутника.',
    'Устаревшая гипотеза, по которой Земля представляет собой плоский диск. Концепция плоской Земли присутствовала в космогонической мифологии многих народов древности, в частности, древних египтян, вавилонян, в раннем индуизме, буддизме.',
    'В нашей галактике существует примерно от 100 до 400 миллиардов звезд. По версии телескопа «Хаббл», сейчас найдено около 100 миллиардов галактик, и считается, что вскоре их будет найдено еще 100 миллиардов.',
    'Совокупность светил, видимых ночью на небесном своде. В основном это звёзды. Невооружённым глазом можно различить звёзды до 5-6 звёздной величины.',
]
let rand = Math.floor(Math.random() * answers.length);
rValue = answers[rand];

    switch (str.length)
    {
        case 36:
            replyText.innerText = answers1
            break;
        case 46:
            replyText.innerText = answers2
            break;
        case 51:
            replyText.innerText = answers3
            break;
        case 34:
            replyText.innerText = answers4
            break;
        default:
            replyText.innerText = rValue                      

    }
}