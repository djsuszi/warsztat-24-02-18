
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
    var gameIntervalId

    function addPoint() {
            document.querySelector('body').style.backgroundColor='red'
        points++;
        //document.body.getElementsByClassName('points')[0].innerText=points;
        //console.log('Dodano punkt '+points)
        //makeMole()
        displayPoints(points)
        document.querySelector('body').style.backgroundColor='green'
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

    }
    function init()
    {
        points=0
        time=10
        mole=makeMole()
        displayPoints(points)
        displayTime(time)

       /* moletime=setInterval( function() {
                    mole.remove()
            },10000)
        */

        gameIntervalId = setInterval( 
        function() { 
            mole.remove()
            mole=makeMole()
            reduceTime()
            console.log('Kret timeout')
        },
        1500
        )
    }

    //for (i=0; i<10; i++) {  makeMole(); }
init()

}) () //koniec funkcji anonimowej drugiej