window.addEventListener('load', function(){
    let scoreBlock = document.querySelector('.main-game .score');
    let score = 0;

    document.querySelector('.main-game .click-zone').onclick = function() {
        score +=10;
        scoreBlock.innerText = score;
    }

    document.querySelector('.factory').forEach(function(fc) {
        let factory = {
            title: fc.querySelector('.title').innerText,
            cost: parseInt(fc.querySelector('.price').innerText),
            isAdding: parseInt(fc.querySelector('.adds').innerText),
            count: parseInt(fc.querySelector('.count').innerText.slice(1, -1)),
            button: fc.querySelector('.button')
        };
        factory.button.onclick = function() {
            
        }
        ownedFactories.push(factory);
    });
});