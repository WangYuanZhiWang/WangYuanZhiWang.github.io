let randomNum = Math.floor(Math.random() * 100) + 1; // floor是向下取整
const guesses = document.querySelector('.guesses');  // 以下三个常量均存储一个引用 指向该html元素
const lastResult = document.querySelector('.lastResult');  // 用于往里面插入值 应该是
const lowOrHi = document.querySelector('.lowOrHi'); // 分别是 猜测结果记录，猜的结果显示，猜高或猜低的提示

const guessSubmit = document.querySelector('.guessSubmit'); // 对表单文本和提交按钮的引用
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

function checkGuess() {
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = '上一次猜的数字是：'; // 这个只在开头显示一次
    }
    guesses.textContent += userGuess + ' '

    if (userGuess === randomNum) {
        lastResult.textContent = '猜对了！很行！';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    }
    else if (guessCount === 10) {
        lastResult.textContent = '机会用完了！';
        setGameOver();
    }
    else {
        lastResult.textContent = '猜错了！再来！';
        lastResult.style = 'red';
        if (userGuess < randomNum) {
            lowOrHi.textContent = '你猜低了！';
        }
        else {
            lowOrHi.textContent = '你猜高了！';
        }
    }

    guessCount++;
    guessField.value = '';  // 恢复现场
    guessField.focus(); // 聚焦于此
}

// 调用函数 需要监听事件以选择恰当的时机
guessSubmit.addEventListener('click', checkGuess);


function setGameOver() {
    guessField.disabled = true;  // 禁用表单和提交按钮
    guessSubmit.disabled = true;
    resetButton = document.createElement('button'); // 创建一个新的button元素
    resetButton.textContent = '开始新游戏';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = ''; // 重置所有提示文本
    }

    resetButton.parentNode.removeChild(resetButton); // 删除重置按钮

    guessField.disabled = false;  // 启用表单和提交按钮
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNum = Math.floor(Math.random() * 100) + 1;  // 重新猜一个数字
}