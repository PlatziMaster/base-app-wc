
class materialCard extends HTMLElement {
    constructor() {
        super()

        this.attachShadow({ mode: 'open' }); 

        this.render()
    }
    render() {
        this.shadowRoot.innerHTML = this.getTemplate();
    }
    getTemplate() {
        return `
            <div class="main-card"></div>
            ${this.getStyles()}
        `; 
    }
    getStyles() {
        return `
            <style>
                :host {
                    display: block;
                }
                .main-card {
                    width: 250px;
                    height: 300px;
                    box-shadow: 1px 1px 3px 1px #a5a3a3;
                    border-radius: 5px;
                }
            </style>
        `;
    }
}

 customElements.define('material-card', materialCard);