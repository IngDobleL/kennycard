function showMenuBar()
{
    var x = document.getElementById("menuBar");

    if (x.className.indexOf("w3-show") == -1)
    {
        x.className += " w3-show";
    }
    else
    {
        x.className = x.className.replace(" w3-show", "");
    }
}