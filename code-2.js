function game(){
    let words =['іграшка', 'ворона', 'шланг', 'будинок', 'лічильник', 'катер', 'автомат', 'портфель', 'палатка', 'лімузин'];
            let word = words[Math.floor(Math.random() * words.length)];
            let answerArray = [];
            let lostLetters = word.length;
            let attempts = 5 * word.length;
            for (let i =  0; i < word.length; i++){
                answerArray[i] = '_';
            }
            while(lostLetters > 0 && attempts > 0){
                if (attempts/word.length >= 5){
                alert('У вас залишилося '+ attempts/word.length + ' спроб!')
                } else if (attempts/word.length >=2) {
                    alert('У вас залишилося '+ attempts/word.length + ' спроб!')
                } else {
                    alert('У вас залишилося '+ attempts/word.length + ' спроба!')
                }
                alert(answerArray.join(' '));
                let guess = prompt('Вгадайте літеру');
                if (prompt === null) {
                    break;
                } else if (guess.length !== 1) {
                    alert('Напишіть одну літеру!')
                } else{
                    for(let j = 0; j < word.length; j++){
                       if(word[j] == guess) {
                        answerArray[j] = guess;
                        lostLetters--;
                        attempts += word.length - 1;
                       }
                       else{
                           attempts--;
                       }
                    } 
                }
            }
            if (attempts > 0){
            alert(answerArray.join(' '));
            alert('Вітаю, ви вгадали слово "'+ word +'"!');}
            else{
                alert('Ви програли!')
            }
            let play = confirm('Зіграємо ще?');
            if (play == true) {
                game(); 
             }
            }
        let play = confirm('Зіграємо ще?');
    if (play == true) {
       game(); 
    }