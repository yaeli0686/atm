function nextPage() {
  let pagesArr = Array.from(document.querySelectorAll(".page"));
  let currentPage = pagesArr.find((page) => !page.classList.contains("hidden"));

  //line 3- is the same as writing like this:
  //   let currentPage = pagesArr.find((page) => {
  //     let containsClass = page.classList.contains("hidden");
  //     if (containsClass === false) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   });

  console.log(currentPage);

  currentPage.classList.add("hidden");
  currentPage.nextElementSibling.classList.remove("hidden");
}

document.getElementsByTagName("img")[0].addEventListener("click", nextPage);

//write "*" when clicking a number on the number-pad (secret-code):
Array.from(document.querySelectorAll(".numPad button:not(.enter)")).forEach(
  (button) => {
    button.addEventListener("click", code);
  }
);

document.querySelector(".pinCodePage .enter").addEventListener("click", () => {
  if (pinCodeArr.length == 4) {
    nextPage();
  }
});

let pinCodeArr = [];
function code(event) {
  // save the code in a global var
  let pinCode = event.target.innerText;
  if (pinCodeArr.length < 4) {
    pinCodeArr.push(pinCode);
  }
  console.log(pinCodeArr);

  // fill spans with "*" as much as the user typed (code length)
  let pinCodeStars = Array.from(
    document.querySelectorAll(".pinCodeValue span")
  );

  for (i = 0; i < pinCodeArr.length; i++) {
    pinCodeStars[i].innerText = "*";
  }
}

Array.from(document.querySelectorAll(".amounts button:not(.enter)")).forEach(
  (button) => {
    button.addEventListener("click", setAmount);
  }
);

function setAmount(event) {
  let amount = parseInt(event.target.innerText);
  document.getElementsByClassName("amount")[0].value = amount;
}

document.querySelector(".amountPage .enter").addEventListener("click", () => {
  if (document.getElementsByClassName("amount")[0].value != "") {
    nextPage();
    setTimeout(function () {
      location.reload();
    }, 5000);
  }
});
