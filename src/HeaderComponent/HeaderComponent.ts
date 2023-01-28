import Component from "../components/Component/Component.js";
class HeaderComponent extends Component {
  constructor(parentElement: HTMLElement) {
    super(parentElement, "page_header", "header");
  }

  render() {
    super.render();
    this.domElement.innerHTML = `
    <img src="pokemon-logo.svg" alt="pokemon logo">
    <div class="bar">
    <ul>
    <li><a href="">Pokemon</li>
    <li><a href="">Favorite</li>
    </div>`;
  }
}

export default HeaderComponent;
