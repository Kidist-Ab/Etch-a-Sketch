let colorPicker = document.getElementById('colorPicker')
let rainbowMode = document.getElementById('rainbowMode')
let eraser = document.getElementById('eraser')
let clear = document.getElementById('clear')
let board = document.getElementById('board')
let pickedColor

makeGrid()
fillGrid('black')

function fillGrid(pickedColor) {
    let gridArray = document.getElementsByClassName('grid')
    for (let i = 0; i < gridArray.length; i++) {

        gridArray[i].addEventListener('click', () => {
            gridArray[i].style.backgroundColor = pickedColor;
        })
    }
}


function generateRandomColor() {
                
     let gridArray = document.getElementsByClassName('grid')
    console.log(gridArray.length)
    for (let i = 0; i < gridArray.length; i++) {
        for (let i = 0; i < gridArray.length; i++) {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        let pickedColor = '#' + randomColor
        let gridArray = document.getElementsByClassName('grid')
       
    
            gridArray[i].addEventListener('click', () => {
                gridArray[i].style.backgroundColor = pickedColor;
            })
        }
        console.log(pickedColor)

    } }




function erase() {
    let gridArray = document.getElementsByClassName('grid')
    for (let i = 0; i < gridArray.length; i++) {
        gridArray[i].addEventListener('click', () => {
            gridArray[i].style.backgroundColor = ''
        })
    }
}
function clearAll() {
    let gridArray = document.getElementsByClassName('grid')
    for (let i = 0; i < gridArray.length; i++) {
        gridArray[i].style.backgroundColor = ''
    }

}

const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'nano',
    default: '#000000',
    comparison: false,


    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(255, 235, 59, 0.95)',
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,

            input: true,

        }
    }
});

let currentColor= 'black'; 
pickr.on('change', (color, source, instance) => {
    let pickedColor = color.toRGBA().toString();
    fillGrid(pickedColor)
    currentColor= pickedColor
console.log(currentColor)
 
})

function makeGrid() {

    board.innerHTML = ''  
    let gridValue = parseFloat(document.getElementById('gridValue').value)
    let gridArea = gridValue * gridValue
    console.log(gridArea)
    let gridSide = 500 / gridValue
    for (let i = 1; i <= gridArea; i++) {
        let div = document.createElement('div')
        div.classList.add('grid')
        board.appendChild(div)
        console.log(gridSide)

        div.style.height = gridSide + 'px'
        div.style.width = gridSide + 'px'
    }
    fillGrid('black') 
}
function updateRange(value) {
    document.getElementById('rangeValue').innerText = 'Grid Area: ' + value + ' x ' + value;
    makeGrid()
  }
  


clear.addEventListener('click', clearAll)
rainbowMode.addEventListener('click', generateRandomColor)
eraser.addEventListener('click', erase)
