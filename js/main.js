'use strict';

{
    const question = document.getElementById('question');
    const choices = document.getElementById('choices');
    const btn = document.getElementById('btn');

    const quizSet = [
        {q: 'What is A?', c: ['A0', 'A1', 'A2']},
        {q: 'What is B?', c: ['B0', 'B1', 'B2']},
        {q: 'What is C?', c: ['C0', 'C1', 'C2']}
    ];
    let currentNum = 0; //何問目のクイズを説いているのかを変数でもっておく

    //問題文の埋め込み
    question.textContent = quizSet[currentNum].q;

    //選択肢
    quizSet[currentNum].c.forEach(choice => { 
        const li = document.createElement('li');
        li.textContent　 = choice;　//配列の一つ一つの要素に代入
        choices.appendChild(li);
    });
}