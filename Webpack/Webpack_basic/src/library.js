export default function editorBox() {
  const edit_box = document.querySelector(".editor");
  edit_box.addEventListener("click", (e) => onClick(e));
  const onClick = (e) => {
    e.target.classList.toggle("editor-active");
  };
}
const testLibrary = () => {
  console.log("It's a test library");
};
const testLibrary2 = () => {
  console.log("It's a test library2");
};
export { testLibrary, testLibrary2 };
