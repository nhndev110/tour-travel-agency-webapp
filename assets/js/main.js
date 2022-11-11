$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() !== 0)
        {
            document.getElementsByClassName("section-header-1")[0].style.display = "none";
            document.getElementsByClassName("logo-header")[1].style.display ="inline-block";
            document.getElementsByClassName("container-hearder")[0].style.height = document.getElementsByClassName("section-header-2")[0].style.height = "65px";
        }
        else
        {
            document.getElementsByClassName("section-header-1")[0].style.display = "flex";
            document.getElementsByClassName("logo-header")[1].style.display = "none";
            document.getElementsByClassName("container-hearder")[0].style.height = "140px";
            document.getElementsByClassName("section-header-2")[0].style.height = "40%";
        }
    });
});

let giay = 0, phut = 0, gio = 7;
cntDown = () => {
    if(gio >= 0 && giay === 0 && phut === 0)
    {
        gio--;
        phut = 59;
        giay = 59;
    } 
    else if(giay > 0)
    {
        giay--;
    }
    else if(giay === 0 && phut > 0)
    {
        phut--;
        giay = 59;
    }
    
    document.getElementsByClassName('gio')[0].innerHTML = 
    document.getElementsByClassName('gio')[1].innerHTML = 
    document.getElementsByClassName('gio')[2].innerHTML = gio;
    
    document.getElementsByClassName('phut')[0].innerHTML = 
    document.getElementsByClassName('phut')[1].innerHTML = 
    document.getElementsByClassName('phut')[2].innerHTML = phut;
    
    document.getElementsByClassName('giay')[0].innerHTML = 
    document.getElementsByClassName('giay')[1].innerHTML = 
    document.getElementsByClassName('giay')[2].innerHTML = giay;
};


let time = setInterval(() => {
    cntDown();
    if(gio === 0)
        clearInterval(time);
}, 1000);