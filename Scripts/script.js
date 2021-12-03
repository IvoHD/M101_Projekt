window.onscroll = function() 
{
    funcScroll()
};


function funcScroll()
{
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) 
    {
        document.getElementById("gototopbtn").classList.add("show");
    }   
    else
    {
        document.getElementById("gototopbtn").classList.remove("show");
    }
}


function gototop()
{
    window.scrollTo(0, 0);
}