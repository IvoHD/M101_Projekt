window.onscroll = function() 
{
    funcScroll()
};


function funcScroll()
{
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) 
    {
        document.getElementById("gototopbtn").style.display = "inline-block";
    }   
    else
    {
    document.getElementById("gototopbtn").style.display = "none";
    }
}


function gototop()
{
    window.scrollTo(0, 0);
}