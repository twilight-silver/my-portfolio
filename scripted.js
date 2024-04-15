const $indicator = document.querySelector(".indicator");
const $links = document.querySelector("li a");

$links.forEach(($link) => {
    $link.addEventListner(
        'mousemove',
        (e) => {
            const { offsetLeft, offsetWidth } = e.$link;
            $indicator.style.left = offsetLeft +'px';
            $indicator.style.width = offsetWidth +'px';
        });
});

// for the form
    function toggleDiv(){
        var form_one = document.getElementById("form");
        var connect = document.getElementById("connect");


        if( connect.classList.contains("hidden")){
            connect.classList.remove("hidden");
            form_one.classList.add("hidden");
        } else{
            connect.classList.add("hidden");
            form_one.classList.remove("hidden");
        }
    }

// Validating the form

const user_name = document.querySelector(".name");
const email =document.querySelector(".email");

if (user_name === ''){
    console.log('This field is compulsory');
}

//menu
document.getElementsByClassName('hamburger').addEventListner('click',function(){
    var menu= document.querySelector('.drop_menu');
    if(menu.style.display === 'none'){
        menu.style.display === 'block';
    }
    else{
        menu.style.display === 'none';
    }
});