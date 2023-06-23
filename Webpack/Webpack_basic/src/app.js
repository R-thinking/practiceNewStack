import editorBox, {
  testLibrary as myLibrary,
  testLibrary2 as myLibrary2,
} from "./library.js";
import "./style.css";
import logo from "./imgs/Sample.jpg";

const img = `<img src="${logo}" alt="logo"/>`;

document.getElementById("fill").innerHTML += img;
document.getElementById("cover").innerHTML += img;
document.getElementById("contain").innerHTML += img;

console.log("app start");
editorBox();
myLibrary();
myLibrary2();
