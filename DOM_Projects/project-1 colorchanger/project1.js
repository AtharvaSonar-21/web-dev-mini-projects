const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (buttons){
    console.log(buttons);
    buttons.addEventListener('click', function(event){
        console.log(event);
        console.log(event.target);
        switch (event.target.id){
            case 'white':
                body.style.backgroundColor = event.target.id;
                break;
            case 'blue':
                body.style.backgroundColor = event.target.id;
                break;
            case 'purple':
                body.style.backgroundColor = event.target.id;
                break;
            case 'cyan':
                body.style.backgroundColor = event.target.id;
                break;
            case 'yellow':
                body.style.backgroundColor = event.target.id;
                break;
            case 'black':
                body.style.backgroundColor = "#212121";
                break;        
            default:
                body.style.backgroundColor = "212121";

                break;
        }
    })
})
