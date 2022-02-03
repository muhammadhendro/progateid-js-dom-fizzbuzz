const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  let number = document.getElementById("number").value;
  console.log(number);

  fizzBuzz = () => {
    if (number == "" || number == 0) {
      return "invalid input!";
    } else if (number % 3 == 0 && number % 5 == 0) {
      return "FizzBuzz!";
    } else if (number % 3 == 0) {
      return "Fizz!";
    } else if (number % 5 == 0) {
      return "Buzz!";
    } else {
      return number;
    }
  };

  const divHasil = document.getElementById("hasil");

  let p = document.createElement("p");
  p.innerHTML = fizzBuzz(number);

  divHasil.append(p);
  document.getElementById("number").value = "";
  document.getElementById("number").focus();
});

function clearText() {
  const e = document.getElementById("hasil");
  e.remove();
  location.reload();
}
