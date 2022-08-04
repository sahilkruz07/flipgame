var k = 0;

var data = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];

var currents =[0,0];

var currenti =[0,0];

var data1 = shuffle(data);

// document.getElementById('s1').innerHTML='<img src="shapes/bg1.png">';

function placeshapes()
{
    for(var i=1;i<=16;i++)
    {
        document.getElementById('s'+i).innerHTML='<img src="shapes/bg'+data1[i-1]+'.png">';
    }
}

placeshapes();


function changes(num)
{
    document.getElementById('c'+num).style.transform = "rotateY(180deg)";

    if(k==0)
    {
        currents[0] = 0;
        currenti[0] = 0;
        currents[1] = 0;
        currenti[1] = 0;

        currents[0] = data1[num-1];
        currenti[0] = num;
         k=1;
    }

    else if(k==1)
    {
        currents[1] = data1[num-1];
        currenti[1] = num;

        if(currents[0]!=currents[1])
        {
            rehide();        
        }
        k=0;

    }

}

function rehide()
{
    setTimeout(function(){
        document.getElementById('c'+currenti[0]).style.transform = "rotateY(0deg)";
        document.getElementById('c'+currenti[1]).style.transform = "rotateY(0deg)";
    },500);
}


function shuffle(array) {

    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) 
    {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    
    }
    return array;

}

