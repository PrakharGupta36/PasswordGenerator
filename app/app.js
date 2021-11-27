let passwordButton = document.getElementById("generate1");
let password = document.getElementById("passwords");

passwordGenerate = (arr) => {
  arr.forEach((element) => {
    let passwordText = document.createElement("li");
    passwordText.textContent = element;
    let copyButton = document.createElement("button");
    copyButton.setAttribute("class", "copy");
    copyButton.innerHTML = `<img src = "/assets/copy.svg" alt = "img"/>`;
    password.appendChild(passwordText);
    passwordText.appendChild(copyButton);
    password.animate(
      [
        // keyframes
        { opacity: 0 },
        { opacity: 1 },
      ],
      {
        // timing options
        duration: 500,
        iterations: 1,
      }
    );

    let selectCopyButton = document.getElementsByClassName("copy");

    for (let i = 0; i < selectCopyButton.length; i++) {
      selectCopyButton[i].onclick = () => {
        let copyText = selectCopyButton[i].previousSibling.textContent;
        console.log(copyText);
        navigator.clipboard.writeText(copyText);
      };
    }
  });
};

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

passwordButton.onclick = () => {
  removeAllChildNodes(password);
  fetch(`https://makemeapassword.ligos.net/api/v1/alphanumeric/json?c=10`)
    .then((response) => response.json())
    .then((data) => {
      let items = data.pws;
      passwordGenerate(items);
    });
};
