`use strict`

const score = document.querySelector(`.score`)
let levelRes = localStorage.getItem('score');

document.getElementById('scoreRes').textContent = levelRes;
// удаляем результаты из localStorage
localStorage.setItem('score', score.textContent = 0);

// после окончания игры сохраняем результат в localStorage добавляем его в список результатов и выводим на экран
let scores = [];

function saveScore() {
    //фокус на поле ввода имени
    document.getElementById('name').focus();
    let score = document.getElementById('scoreRes').textContent;
    let name = document.getElementById('name').value;
    document.getElementById('name').value = '';
    let scoreObj = {
        name: name,
        score: score
    }
    scores.push(scoreObj);
    // больше 18 результатов не сохраняем
    if (scores.length > 18) {
        scores.shift();
    }
    localStorage.setItem('scores', JSON.stringify(scores));
    showScore();
}

// выводим список результатов на экран
function showScore() {
    let scoreList = document.querySelector(`.game_result_list`);
    let scores = JSON.parse(localStorage.getItem('scores'));
    scoreList.textContent = '';
    scores.forEach(score => {
       let li = document.createElement('li');
       li.classList.add('result_list_item');
       
       let name = document.createElement('div');
        name.classList.add('scores_item_box');
        
        let spantext = document.createElement('span');
        spantext.classList.add('scores_item_text');
        
        spantext.textContent = score.name;
        name.appendChild(spantext);
        
        let scoreRes = document.createElement('div');
        scoreRes.classList.add('scores_item_box');
        
        let spantext2 = document.createElement('span');
        spantext2.classList.add('scores_item_text');

        spantext2.textContent = score.score;
        scoreRes.appendChild(spantext2);
       
        li.appendChild(name);
        li.appendChild(scoreRes);
        scoreList.appendChild(li);
    })
    
}

// при загрузке страницы проверяем есть ли в localStorage результаты игр, если есть выводим их на экран
if (localStorage.getItem('scores')) {
    scores = JSON.parse(localStorage.getItem('scores'));
    showScore();
}

//сброс результатов игр localStorage
function resert() {
    localStorage.clear();
    scores = [];
    showScore();
}
