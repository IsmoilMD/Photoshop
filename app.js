let img = document.querySelector("#img")
let width = document.querySelector("#size")
let saturation = document.querySelector("#img-saturation")
let brightness = document.querySelector("#img-brightness")
let contrast = document.querySelector("#img-contrast")
let bRadius = document.querySelector("#img-bRadius")
let Rotate = document.querySelector("#img-Rotate") 
let bColor = document.querySelector("#img-bColor")
let box = document.querySelector("#img__box")


width.addEventListener("input", () => {
    console.log(width.value)
img.style.minWidth = width.value * 5 + "%";
})
saturation.addEventListener("input", () => {
img.style.filter = `saturate(${saturation.value * 5}%)`
})
brightness.addEventListener("input", () => {
img.style.filter = `brightness(${brightness.value * 5}%)`
})
contrast.addEventListener("input", () => {
img.style.filter = `contrast(${contrast.value * 5}%)`
})
bRadius.addEventListener("input", () => {
box.style.borderRadius = bRadius.value + "px"
})
bRadius.addEventListener("input", () => {
img.style.borderRadius = bRadius.value + "px"
})
Rotate.addEventListener("input", () => {
img.style.rotate = Rotate.value * 3.6 + "deg"
})
bColor.addEventListener("input", () => {
box.style.border = `14px solid ${bColor.value}`
})