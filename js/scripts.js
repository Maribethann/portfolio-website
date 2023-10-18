console.log('Hey there! Welcome to my little corner of the internet.')

function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
        x.className += ' responsive';  
    } else {
        x.className = 'navtoggle';
    }
   
}