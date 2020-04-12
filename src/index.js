// css

import 'bootstrap/dist/css/bootstrap.min.css'
import './css/style.css'

// custom elements
import './customElement/meals'
import './customElement/footer'

import {TimelineLite} from 'gsap/all'
import 'bootstrap'

const mealList = document.createElement("meal-list")

const tl = new TimelineLite()

fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
.then(res=>res.json())
.then(res=>{
    mealList.setAttribute("class","carousel-inner col-12")
    mealList.meals = res.categories
    $(".carousel").append(mealList)

    tl
    .from(".logo",1,{opacity:0,y:-100})
    .from("#ellipse",1,{opacity:0,y:-100})
    .from(".active .thumbs",1,{opacity:0,x:100})
    .from(".active .title",1,{opacity:0,x:-100})
    .from(".active .description",1,{opacity:0,x:-100})
    .from(".controllers",1,{opacity:0,y:100})
    .from("foo-ter",1,{opacity:0,y:100})

})