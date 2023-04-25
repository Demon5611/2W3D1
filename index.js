const div = document.querySelector('.left')

window.addEventListener("load", (event) => {
    document.querySelector(".button2").onclick = function () {
        location.reload(true);
    };
});




div.addEventListener('click', addQuestionToInput) 

function addQuestionToInput ()
{
let res=''
let span = document.querySelectorAll('span');
[].forEach.call(span, (el) =>{
    el.onclick = function(event) {
    res=document.querySelector("input").value = el.innerText
}
});
return res
}

//const btn=document.querySelector('.button is-primary is-warning')
// btn.addEventListener('click', reply)

// function reply (str, questions)
// {
    
    const questions1 = 'Какая численность населения Москвы ?' // 36
    const questions2 = 'Какая численность населения Санкт-Петербурга ?' // 46
    const questions3 = 'Может Вас интересует численность населения Самары ?'     //  51
    const questions4 = 'Или численность населения Тюмени ?'     //  34
    
    const answers1 = 'Численность населения города по данным Росстата составляет 13 015 126 человек (2022). Из них 12 455 682 — городское население, 199 368 — сельское.'
    const answers2 ='Численность населения города по данным Росстата составляет 5 384 342 чел. (2021). Плотность населения — 3837,73 чел./км 2 (2021). Без учёта выделяемых отдельно населённых пунктов в составе Санкт-Петербурга, общая численность населения муниципальных округов города составляет 4 542 813 чел.'        
    const answers3 = 'Население — 1 136 709 чел. (2022), восьмой по численности населения городРоссии. В пределах агломерации (третьей по численности населения в России) проживает свыше 2,7 млн человек.'            
    const answers4 = 'Численность населения города Тюмени по состоянию на 1 января 2021 года – 816,7 тыс. человек.'


    let str='Или численность населения  ?'

switch (str.length)
{
    case 36:  
        console.log(answers1)
        break;
    case 46: 
        console.log(answers2)
        break;
    case 51:
        console.log(answers3)
        break;
    case 34:
        console.log(answers4)
        break;
    default:

let words = [
            'О возможности существования жизни на Марсе люди размышляли веками из-за близости планеты и её сходства с Землёй. Поиск признаков жизни начался в XIX веке и продолжается по настоящее время. С 1960-х годов телескопические наблюдения дополнили запуски автоматических межпланетных станций для изучения планеты, вначале с пролётной траектории, а затем с орбиты искусственного спутника.',
            'Устаревшая гипотеза, по которой Земля представляет собой плоский диск. Концепция плоской Земли присутствовала в космогонической мифологии многих народов древности, в частности, древних египтян, вавилонян, в раннем индуизме, буддизме.',
            'В нашей галактике существует примерно от 100 до 400 миллиардов звезд. По версии телескопа «Хаббл», сейчас найдено около 100 миллиардов галактик, и считается, что вскоре их будет найдено еще 100 миллиардов.',
            'Совокупность светил, видимых ночью на небесном своде. В основном это звёзды. Невооружённым глазом можно различить звёзды до 5-6 звёздной величины.',
        ]
    

        let rand = Math.floor(Math.random() * words.length);
        rValue = words[rand];

        console.log(rValue)
    }

// // for (let key in answersObj)
// {
//     if obj[key] includes answersObj[key]{

//         console.log(answersObj[key])
//     }
// }

    
    // obj[1]='hello'
    // console.log(obj)
    // преобразовали в обьект 
    // var obj = str.split(","), theobj = {};

// for (let i=0; i<temp.length; i+=2) {
//   theobj[temp[i]] = temp[(i+1)];
// }
// for (let i = 0; i < questions.length; i++)
// {
    
//     if (Object.keys(theobj) === Object.values(questions[i]))
//     {
//         console.log(Object.values(questions[i]))
//         console.log('yes')
//     } else
//     {
//         console.log('no')
//     }
// }
// console.log(Object.keys(theobj))

    // let arrStr=[]
    // arrStr = str.split('') // преобразовали str в []
    
    // console.log(arrStr)
    
    // let prop = []
    // prop = Object.values(questions);
    // console.log(prop)
// reply()
    // отправляем ответ в правое поле
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


// }

// const answersObj = {
//     1:'Численность населения города по данным Росстата составляет 13 015 126 человек (2022). Из них 12 455 682 — городское население, 199 368 — сельское.',
//     2:'Численность населения города по данным Росстата составляет 5 384 342 чел. (2021). Плотность населения — 3837,73 чел./км 2 (2021). Без учёта выделяемых отдельно населённых пунктов в составе Санкт-Петербурга, общая численность населения муниципальных округов города составляет 4 542 813 чел.',
//     3:'Население — 1 136 709 чел. (2022), восьмой по численности населения город России. В пределах агломерации (третьей по численности населения в России) проживает свыше 2,7 млн человек. ',
//     4:'Численность населения города Тюмени по состоянию на 1 января 2021 года – 816,7 тыс. человек.',
    
// }
    
    
// const str1 = 'Какая численность населения Москвы ?'
// function reply (str1, questions, answers)
// {
        
//     const result ={}
//         if (str1 === questions[1]) {
//         result = answers[1]
//     } else {
//         if (str1 === questions[2]) {
//             result = answers[2]
//         // } else {
//         //     if (str = questions3) {
//         //         result = answers.3
//         //     } else {
//         //         result = answers.4                
//         //     }
//         return result
//         }
//     }
//     console.log(result)
// }
// console.log(reply())
