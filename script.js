const displayArea = document.getElementById("display");

const btn7 = document.getElementById("seven");

const btn = document.querySelectorAll(".item");

function printValue(num) {
  if (num != undefined) {
    displayArea.value += num;
    console.log("Display value : ", num);
  }
}

// btn7.addEventListener("click", function () {
//   let value = "7";
//   console.log("Button clicked : ", value);
//   printValue(value);
// });

function calculateOperation(numString) {
  if (numString.includes("+")) {
    let stringPart = numString.split("+");
    console.log("Array Size: ", stringPart.length);
    let result1 = 0;
    for (let i = 0; i < stringPart.length; i++) {
      let strPartOne = Number(stringPart[i]);
      result1 += strPartOne;
    }
    console.log(result1);

    displayArea.value = result1;
    return result1;
    // let strPart1 = Number(stringPart[0]);
    // let strPart2 = Number(stringPart[1]);
    // let result = strPart1 + strPart2;
    // console.log(result);
    // displayArea.value = result;
    // return result;
  } else if (numString.includes("-")) {
    let stringPart = numString.split("-");
    let strPart1 = Number(stringPart[0]);
    let strPart2 = Number(stringPart[1]);
    let result = strPart1 - strPart2;
    console.log(result);
    displayArea.value = result;
    return result;
  } else if (numString.includes("X")) {
    let stringPart = numString.split("X");
    let strPart1 = Number(stringPart[0]);
    let strPart2 = Number(stringPart[1]);
    let result = strPart1 * strPart2;
    console.log(result);
    displayArea.value = result;
    return result;
  } else if (numString.includes("/")) {
    let stringPart = numString.split("/");
    let strPart1 = Number(stringPart[0]);
    let strPart2 = Number(stringPart[1]);
    let result = strPart1 / strPart2;
    console.log(result);
    displayArea.value = result;
    return result;
  } else {
    return numString;
  }
}

function clearDisplay() {
  displayArea.value = "";
}

btn.forEach((button) => {
  button.addEventListener("click", function (e) {
    switch (e.target.id) {
      case "one":
        printValue(1);
        break;
      case "two":
        printValue(2);
        break;
      case "three":
        printValue(3);
        break;
      case "four":
        printValue(4);
        break;
      case "five":
        printValue(5);
        break;
      case "six":
        printValue(6);
        break;
      case "seven":
        printValue(7);
        break;
      case "eight":
        printValue(8);
        break;
      case "nine":
        printValue(9);
        break;
      case "zero":
        printValue(0);
        break;

      case "add-operation":
        printValue("+");
        break;
      case "subs-operation":
        printValue("-");
        break;
      case "multiply-operation":
        printValue("X");
        break;
      case "devide-operation":
        printValue("/");
        break;

      case "equla-operation":
        calculateOperation(displayArea.value);
        break;

      case "ac":
        clearDisplay();
        break;

      default:
        break;
    }
  });
});
