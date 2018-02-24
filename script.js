(function (){
    
function kassinhello(name,ilerazy)
{

    for(var i = 0; i<ilerazy; i++)
    {
    console.log("Hello "+name)
    }
}
var kassin2=kassinhello

// hello("Piotr",5)
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

}) () //koniec funkcji anonimowej



//console.log(dupa)