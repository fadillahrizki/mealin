class Meal extends HTMLElement{

    set meal(meal){
        this._meal = meal
        this.render()
    }

    render(){
        this.innerHTML = `
            <div class="col-12 col-sm-6">
                <h2 class="title">${this._meal.strCategory}</h2>
                <p class="description">${this._meal.strCategoryDescription}</p>
            </div>
            <div class="col-6 thumbs">
                <img src="${this._meal.strCategoryThumb}" alt="${this._meal.strCategory}">
            </div>
        `
    }

}

customElements.define("meal-item",Meal)