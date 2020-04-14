import './meal'
class Meals extends HTMLElement{

    set meals(meals){
        this._meals = meals
        this.render()
    }

    render(){
        this._meals.map((meal,i)=>{
            const mealElement = document.createElement("meal-item")
            if(i === 0){
                mealElement.setAttribute("class","carousel-item active meal")
            }else{
                mealElement.setAttribute("class","carousel-item meal")
            }
            mealElement.meal = meal
            this.appendChild(mealElement)
        })
    }

}

customElements.define("meal-list",Meals)