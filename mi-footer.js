class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2023
        Gonzalez Rodriguez Jorge Armando
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
