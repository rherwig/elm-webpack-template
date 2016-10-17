import Elm from './main.elm';
const mountNode = document.querySelector('#root');

const app = Elm.Main.embed(mountNode);