let text = document.querySelector("#str");
let mail = document.querySelector("#mail");
let btn = document.querySelector("#btn");
let male = document.querySelector("#male");
let female = document.querySelector("#female");

btn.addEventListener("click", () => {
  if (/[a-zA-Z]/.test(text.value)) {
    text.style.background = "white";
    return true;
  } else {
    text.style.background = "red";
  }
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      mail.value
    )
  ) {
    mail.style.background = "white";
    return true;
  } else {
    mail.style.background = "red";
  }
  if (male.value || female.value) {
      return true
  }else{
      
  }
});
