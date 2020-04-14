class Loading extends HTMLElement{

    connectedCallback(){
        this.render()
    }

    render(){
        this.innerHTML = `    
            <div class="loading"></div>
            <div class="loading"></div>
            <div class="loading"></div>
        `
    }

}

customElements.define("loa-ding",Loading)