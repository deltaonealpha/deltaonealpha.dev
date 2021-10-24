function theme_whitemode() {
    document.getElementById("header").style.backgroundImage = "url('../../../../../../../assets/img/profile_header_white.png')";
    document.getElementById("header").style.backgroundColor = "#B5B6B7";
    document.getElementById("body").style.backgroundColor = "#B5B6B7";

    var els = document.getElementsByClassName("classtext");
    for(var i = 0; i < els.length; i++)
    {
        try {
    els[i].style.color = "#181818";
    }
    catch(err) {
    //pass
    }
    }
        
    var els = document.getElementsByClassName("classbgr");
    for(var i = 0; i < els.length; i++)
    {
        try {
    els[i].style.backgroundColor = "#d1d1d1";
    els[i].style.boxShadow = "0px 0px 0px blue";
    }
    catch(err) {
    //pass
    }
    }

    var els = document.getElementsByClassName("classbgr2");
    for(var i = 0; i < els.length; i++)
    {
        try {
    els[i].style.backgroundColor = "#B3B3B6";
    els[i].style.boxShadow = "0px 0px 0px blue";

    }
    catch(err) {
    //pass
    }
    }
        
    var els = document.getElementsByClassName("classbgr3");
    for(var i = 0; i < els.length; i++)
    {
        try {
    els[i].style.boxShadow = "0px 0px 0px blue";

    }
    catch(err) {
    //pass
    }
    }       
}


function theme_darkmode() {
    document.getElementById("header").style.backgroundImage = "url('../../../../../../../assets/img/profile_header.png')";
    document.getElementById("header").style.backgroundColor = "#121314";
    document.getElementById("body").style.backgroundColor = "#121314";

    var els = document.getElementsByClassName("classtext");
    for(var i = 0; i < els.length; i++)
    {
        try {
    els[i].style.color = "#d1d1d1";
    }
    catch(err) {
    //pass
    }
    }
        
    var els = document.getElementsByClassName("classbgr");
    for(var i = 0; i < els.length; i++)
    {
        try {
    els[i].style.backgroundColor = "#191A1C";
    els[i].style.boxShadow = "5px 2px 20px 7px #0c0c0c";
    }
    catch(err) {
    //pass
    }
    }

    var els = document.getElementsByClassName("classbgr2");
    for(var i = 0; i < els.length; i++)
    {
        try {
    els[i].style.backgroundColor = "#0c0d0e";
    els[i].style.boxShadow = "5px 2px 15px 4px rgba(12,12,12,0.67)";

    }
    catch(err) {
    //pass
    }
    }
        
    var els = document.getElementsByClassName("classbgr3");
    for(var i = 0; i < els.length; i++)
    {
        try {
    els[i].style.boxShadow = "5px 2px 15px 10px rgb(14,14,14)";

    }
    catch(err) {
    //pass
    }
    }
        
}
    
