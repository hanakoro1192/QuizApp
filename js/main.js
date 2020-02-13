'use strict';

{
    const question = document.getElementById('question');
    const choices = document.getElementById('choices');
    const btn = document.getElementById('btn');
    const result = document.getElementById('result');
    const scoreLabel = document.querySelector('#result > p');

    const quizSet = shuffle([
        {q: '世界で一番大きな湖は?', c: ['カスピ海', 'うんこ', '琵琶湖']},
        {q: '2の8乗は?', c: ['256', '64', '1024']},
        {q: '次のうち、最初にリリースされた言語は?', c: ['Python', 'Javascript', 'HTML']},
    ]);
    let currentNum = 0; //何問目のクイズを説いているのかを変数でもっておく
    let isAnswered;　//再代入していくためletで定義
    let score = 0;

    function shuffle(arr){
        for(let i = arr.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
        return arr;
    }

    function checkAnswer(li){
        if(isAnswered){ // === trueは省略可能
            return;
        }
        isAnswered = true;
        if(li.textContent === quizSet[currentNum].c[0]){
            li.classList.add('correct');
            score++;
        }else{
            li.classList.add('wrong');
        }

        btn.classList.remove('disabled');
    }

    function setQuiz(){
        isAnswered = false;
    //問題文の埋め込み
    question.textContent = quizSet[currentNum].q;

    while(choices.firstChild){
        choices.removeChild(choices.firstChild); //この中の処理を繰り返してくれる
    }

    const shuffledChoices = shuffle([...quizSet[currentNum].c]);
    //選択肢
    shuffledChoices.forEach(choice => { 
        const li = document.createElement('li');
        li.textContent　 = choice;　//配列の一つ一つの要素に代入
        li.addEventListener('click', ()=> {
            checkAnswer(li);
        });
        choices.appendChild(li);
    });

    if(currentNum === quizSet.length - 1){
        btn.textContent = 'Show Score';
    }
    }

    setQuiz();

    btn.addEventListener('click', () =>{
        if(btn.classList.contains('disabled')) {
            return;
        }
        btn.classList.add('disabled');
        
        if(currentNum === quizSet.length - 1){
            // console.log(`Score: ${score} / ${quizSet.length}`);
            scoreLabel.textContent = `Score: ${score} / ${quizSet.length}`
            result.classList.remove('hidden');
        }else{
            currentNum++;
            setQuiz();
        }
    });
}