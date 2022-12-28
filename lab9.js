function clickMe(button) { 
    if(button.innerHTML == 'Щелчок') 
        button.innerHTML = 'Спасибо'; 
    else 
        button.innerHTML = 'Щелчок'; 
} 

function clickFIO(button) { 
    if(button.innerHTML == 'София Тараненко') 
        button.innerHTML = 'Тараненко София'; 
    else 
        button.innerHTML = 'София Тараненко'; 
} 
 
function knopka(button) { 
    if(button.innerHTML == 'Нажми меня') { 
        button.innerHTML = 'Ещё раз нажми'; 
        button.style.color = 'purple'; 
    } 
         
    else if(button.innerHTML == 'Ещё раз нажми') { 
        button.innerHTML = 'Ещё';   
        button.style.color = 'red'; 
    } 
          
    else if(button.innerHTML == 'Ещё') { 
        button.innerHTML = 'Начать сначала';    
        button.style.color = 'orange'; 
    } 
         
    else { 
        button.innerHTML = 'Нажми меня'  
        button.style.color = 'blue';  
    } 
}

function showCoords(event) { 
    event.target.innerHTML = 'x = ' + event.offsetX + ' ' + ', y = ' + event.offsetY + ' ' +  
    (event.ctrlKey? '<b>Ctrl</b>':'<s>Ctrl</s>') + ' ' + (event.shiftKey? '<b>Shift</b>':'<s>Shift</s>') +  
    ' ' + (event.altKey? '<b>Alt</b>':'<s>Alt</s>' ); 
} 
window.addEventListener('DOMContentLoaded', function() { 
    let coords = document.querySelector('#coords'); 
    coords.addEventListener('mousemove', showCoords); 
});