
//this runs when the page is loaded for the first time
showColorsUsed();


//====================================== VARIABLES
var baseColor, wrapperColor, outerColor, innerColor, miscColor;



function setTheme(theme) {
    //saving the chosen theme in localstorage so that whenever a user comes back 
    //to the site, it should use the theme previously selected by the user
    //      figure out why this doesnt work for refreshing the page
    localStorage.setItem('currentTheme', theme);
    document.documentElement.className = theme;
    showColorsUsed();
}

function showColorsUsed() {
    //update variables, which change depending onn the current page theme 
    baseColor = window.getComputedStyle(document.documentElement).getPropertyValue('--base');
    wrapperColor = window.getComputedStyle(document.documentElement).getPropertyValue('--wrapper');
    outerColor = window.getComputedStyle(document.documentElement).getPropertyValue('--outer');
    innerColor = window.getComputedStyle(document.documentElement).getPropertyValue('--inner');
    miscColor = window.getComputedStyle(document.documentElement).getPropertyValue('--misc');
    
    //update the "Colors Used" panel
    document.getElementById("base-color").innerHTML = "base: " + baseColor;
    document.getElementById("wrapper-color").innerHTML = "wrapper: " + wrapperColor;
    document.getElementById("outer-color").innerHTML = "outer: " + outerColor;
    document.getElementById("inner-color").innerHTML = "inner: " + innerColor;
    document.getElementById("misc-color").innerHTML = "misc: " + miscColor;
}