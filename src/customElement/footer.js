class Footer extends HTMLElement{

    connectedCallback(){
        this.render()
    }

    render(){
        this.innerHTML = `    
            <p>copyright &copy; fadillahrizki 2020</p>
        `
    }

}

customElements.define("foo-ter",Footer)