let list = document.querySelectorAll('.page')

const viewHome = () => {
    list[0].style.display = 'block' ;
    list[1].style.display = 'none' ;
    list[2].style.display = 'none' ;
}
const viewProducts = () => {
    list[0].style.display = 'none' ;
    list[1].style.display = 'block' ;
    list[2].style.display = 'none' ;
}
const viewCart = () => {
    list[0].style.display = 'none' ;
    list[1].style.display = 'none' ;
    list[2].style.display = 'block' ;
}