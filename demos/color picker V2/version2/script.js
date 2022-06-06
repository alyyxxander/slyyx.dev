
class ColorPicker {

    constructor(root) {
        this.root = root;
        this.colorjoe = colorjoe.rgb(this.root.querySelector(".colorjoe"));
        this.currentColor = null;
        this.savedColors = this.getSavedColors();

        this.colorjoe.show();
        this.setCurrentColor("#009578");

        this.colorjoe.on("change", color => {
            this.setCurrentColor(color.hex(), true);
        });

        this.root.querySelectorAll(".saved-color").forEach((element, i) => {
            this.showSavedColor(element, this.savedColors[i]);

            element.addEventListener("click", event => {
                this.setCurrentColor(element.dataset.color);
            });
        });

        this.root.querySelectorAll(".save-btn").forEach((button, i) => {
            buttonn.addEventListener("click", event => {

            })
        })



    } //end of constructor

    setCurrentColor(color, skipCjUpdate = false) {
        this.currentColor = color;
        this.root.querySelector(".current-color-text").textContent = color;
        this.root.querySelector(".current-color").style.background = color;

        if (!skipCjUpdate) {
            this.colorjoe.set(color);
        }
    }

    getSavedColors() {
        return [baseColor, wrapperColor, outerColor, innerColor, miscColor];
    }

    //for updating the current color to be whatever the user clicked on
    // I THINK ¿
    showSavedColor(element, color) {
        element.style.background = color;
        element.dataset.color = color;
    }


} //end of ColorPicker class



//====================================== VARIABLES
var baseColor, wrapperColor, outerColor, innerColor, miscColor;