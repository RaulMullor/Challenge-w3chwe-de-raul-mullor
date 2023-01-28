import Component from "../components/Component/Component.js";
class HeaderComponent extends Component {
  constructor(parentElement: HTMLElement) {
    super(parentElement, "page_header", "header");
  }

  render() {
    super.render();
    this.domElement.innerHTML = `
    <h1>Pokemon</h1> 
    <img src="pokemon-logo.svg" alt="pokemon logo">`;
  }
}

export default HeaderComponent;
