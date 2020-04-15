import { LitElement, html, css } from 'lit-element';

import './material-card.js';

export class MyApp extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      page: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
      }

      main {
        flex-grow: 1;
        width: 100%
      }
      section {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
      }
      material-card {
        margin: 20px auto;
      }

    `;
  }

  render() {
    return html`
      <main>
        <h1>My app</h1>
        <section>
          <material-card></material-card>  
          <material-card></material-card>
          <material-card></material-card>
          <material-card></material-card>
          <material-card></material-card>
          <material-card></material-card> 
        </section>   
      </main>

    `;
  }
}
