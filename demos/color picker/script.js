
class ColorPicker {
    constructor(root) {
        this.root = root;
        this.colorjoe = colorjoe.rgb(this.root.querySelector(".colorjoe"));
        this.selectedColor = null;
        this.savedColors = this.getSavedColors1();

        this.colorjoe.show();
        this.setSelectedColor("#009578");

        this.colorjoe.on("change", color => {
            this.setSelectedColor(color.hex(), true);
        });

        this.root.querySelectorAll(".saved-color").forEach((element, i) => {
            this.showSavedColor(element, this.savedColors[i]);

            element.addEventListener("mouseup", event => {
                if (event.button == 1) {
                    this.saveColor(this.selectedColor, i);
                    this.showSavedColor(element, this.selectedColor);
                }

                this.setSelectedColor(element.dataset.color);
            });
        });


        this.root.querySelectorAll(".save-btn").forEach((button, i) => {
            button.addEventListener("click", event => {
                
                switch (button.id) {
                    case "b1":
                        targetID = "color1";
                        updateThemeColor('--base', this.selectedColor);
                        break;

                    case "b2":
                        targetID = "color2";
                        updateThemeColor('--wrapper', this.selectedColor);
                        break; 

                    case "b3":
                        targetID = "color3";
                        updateThemeColor('--outer', this.selectedColor);
                        break; 

                    case "b4":
                        targetID = "color4";
                        updateThemeColor('--inner', this.selectedColor);
                        break; 

                    case "b5":
                        targetID = "color5";
                        updateThemeColor('--misc', this.selectedColor);
                        break;        
                
                    default:
                        targetID = "default";
                        break;
                }

                target = document.getElementById(targetID);
                updateDisplayedColor(target, this.selectedColor);
            });

        });
    }

    setSelectedColor(color, skipCjUpdate = false) {
        this.selectedColor = color;
        this.root.querySelector(".selected-color-text").textContent = color;
        this.root.querySelector(".selected-color").style.background = color;

        if (!skipCjUpdate) {
            this.colorjoe.set(color);
        }
    }

    getSavedColors1() {
        return ["#009578", "#0000ff", "#8600ff", "#e39e2b", "#5ee32b"];
    }

    showSavedColor(element, color) {
        element.style.background = color;
        element.dataset.color = color;
    }

}


var currentColor = "---"
var targetID = "---";
var target = document.getElementById(targetID);
var currentColorText = document.getElementById("current-color-text");
var currentColorPreview = document.getElementById("current-color-preview");

function updateDisplayedColor(element, color) {
    element.style.background = color;
    element.dataset.color = color;
}

function setCurrentColor(color) {
    currentColorText.textContent = color;
    currentColorPreview.style.background = color;
}





const cp = new ColorPicker(document.querySelector(".color-container"));


// Get the root element
var pageRoot = document.querySelector(':root')

function updateThemeColor(targetVariable, newColor) {
    //acceptable target variables: --base, --wrapper, --outer, --inner, --misc
    pageRoot.style.setProperty(targetVariable, newColor);
    showColorsUsed();
}



//this runs when the page is loaded for the first time
showColorsUsed();


//====================================== VARIABLES
var baseColor, wrapperColor, outerColor, innerColor, miscColor;
var themeColors = [baseColor, wrapperColor, outerColor, innerColor, miscColor];
var defaultTheme1 = ["#472d30", "#723d46", "#e26d5c", "#ffe1a8", "#c9cba3"];
var defaultTheme2 = ["#0c1a1a", "#053430", "#396662", "#7d9093", "#cfcfd1"];
var defaultTheme3 = ["#22223b", "#4a4e69", "#9a8c98", "#c9ada7", "#f2e9e4"];
var defaultTheme4 = ["#193f59", "#657c8c", "#8ec2bb", "#f4baaf", "#fae1e1"];


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