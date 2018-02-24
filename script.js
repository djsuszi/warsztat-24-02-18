
function test()  {
    
function kassinhello(name,ilerazy)
{
    for(var i = 0; i<ilerazy; i++)
    {
    console.log("Hello "+name)
    }
}
var kassin2=kassinhello

// funkcje JS  foreach, map, filter, reduce
// "fun fun function"  kanał na YT
var secondsCounter=0
var intervalId = setInterval(
    function () {
        var data = new Date().getTime();
        var wewZmienna="asd"
//        var teraz = data.getTime();
        // console.clear()
        console.log('minela sekunda '+secondsCounter++ +' '+Math.round(data/1000))
//clearInterval(intervalId)
            },
    1000
)

setTimeout(
    function()  {
            clearInterval(intervalId)
                },
    5000
)

//debugger  włączenie debuga

var body=document.querySelector('body')

console.log(body)
//console.dir(body)  bardziej szczegółowo

body.addEventListener(
    'click',
    function() {
        console.log('klik!')

    }
)

} //(); //koniec funkcji anonimowej

(function (){
 
    var points
    var time 
    var mole 
    var gameIntervalId, timeIntervalId

    function addPoint() {
        falshBackground()
        points++;
        //document.body.getElementsByClassName('points')[0].innerText=points;
        //console.log('Dodano punkt '+points)
        //makeMole()
        displayPoints(points)
        
    }    

    function falshBackground() {
        var body = document.querySelector('body')
        body.style.backgroundColor='red'
        setTimeout(
            function() {
                body.style.backgroundColor='green'
            },100
        )
        
    }

    function displayPoints (pointsParam)    {
        var pointsContainer= document.querySelector('.points')
        pointsContainer.innerText='Punkty:'+pointsParam
    }

    function displayTime (timeParam)    {
        var timeContainer= document.querySelector('.time')
        timeContainer.innerText='Czas:'+timeParam
    }

    function makeMole() {
        var molePosX=Math.round( Math.random() * (window.innerWidth  - window.innerHeight/10) )
        var molePosY=Math.round( Math.random() * (window.innerHeight - window.innerHeight/10) )
        var mole=document.createElement('div')
        mole.classList.add('mole')
        mole.style.left=molePosX+'px'
        mole.style.top=molePosY+'px'

        mole.addEventListener('click', function ()
            {
                mole.remove()
                console.log('Kret Klik')
                addPoint()
                
            }
            )
        document.querySelector('body').appendChild(mole)
        return mole
    }

    function reduceTime() {
        time--
        displayTime(time)
        if (time === 0) {
            //document.querySelector('body').style.backgroundColor='red'
            endGame() }
    }

    function endGame() {
        
        clearInterval(gameIntervalId)
        clearInterval(timeIntervalId)
        mole.remove()
        document.querySelector('.end-modal').style.display='block'
        document.querySelector('.score').innerText=points;
    }

    function init()
    {
        points=0
        time=30
        mole=makeMole()
        displayPoints(points)
        displayTime(time)
        startGame()
    }

    function startGame() {
        gameIntervalId = setInterval( 
            function() { 
            mole.remove()
            mole=makeMole() 
            console.log('Kret timeout')
            },
            1000
        )

        timeIntervalId = setInterval( 
            function() { 
            reduceTime()
            },
            1000
        )

    }
    //for (i=0; i<10; i++) {  makeMole(); }
//init()


function startPage(){
    document.querySelector('.start-modal button')
        .addEventListener(
            'click',
            function() {
                document.querySelector('.start-modal').style.display='none'
                init()
            }
        )
    
        document.querySelector('.end-modal button')
        .addEventListener(
            'click',
            function() {
                document.querySelector('.end-modal').style.display='none'
                init()
            }
        )
}
//init();
startPage();

}) () //koniec funkcji anonimowej drugiej