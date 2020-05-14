
function diasEntreFechas(fecha1,fecha2){
    const unAño = 1000*60*60*24*365
    const diferencia = Math.abs(fecha1 - fecha2)
    return Math.floor(diferencia / unAño)
}
const hoy = new Date()
const nacimiento = new Date(1995,3,14)
const miEdad = diasEntreFechas(hoy, nacimiento)

function parrafoTemplate(edad){
    return(`<p>Hola, mi nombre es Juan, actualmente tengo ${edad} años, soy de Argentina(Bs As).</br> </p>`)
}
const imprimir = parrafoTemplate(miEdad)

window.onload = function(){
    const parrafo = document.getElementById('parrafo')
    const loader = document.querySelector('.loader')
    const load_margin = document.querySelector('.load_margin')
    const innerFade = document.querySelector('.main_home div')
    
    parrafo.innerHTML = imprimir
    load_margin.remove()
    loader.remove()
    innerFade.classList.add('fadeIn')
    

}
