function searchNumber() {
    let No1 = document.getElementById("number1st");
    let No2 = document.getElementById("number2nd");
    let container = document.getElementById("Container");
    let num1st = parseInt(No1.value);
    let num2nd = parseInt(No2.value);
    let output = "";

    if (No1.value == '' || No2.value == '') {
        alert("Xin nhập giá trị");
        return false;

    } else if (isNaN(No1.value) || isNaN(No2.value)) {
        alert("Xin nhập số dương khác 1");
        return false;

    } else if (num1st <= 1 || num2nd <= 1) {
        alert("Xin nhập số dương khác 1");
        return false;

    } else {
        if (num1st < num2nd) {
          for (let i = num1st; i <= num2nd; i++) {
            let primeNumber = 0;
            for (let j = 2; j < i; j++) {
              if (i % j == 0) {
                primeNumber++;
              }
            }
            if (primeNumber == 0) {
              output += i + ",";
            }
          }

        } else if (num1st > num2nd) {
          for (let i = num2nd; i <= num1st; i++) {
            let primeNumber = 0;
            for (let j = 2; j < i; j++) {
              if (i % j == 0) {
                primeNumber++;
              }
            }
            if (primeNumber == 0) {
              output += i + ",";
            }
          }
          
        } else {
          for (let i = num1st; i <= num1st; i++) {
            let primeNumber = 0;
            for (let j = 2; j < num1st; j++) {
              if (i % j == 0) {
                primeNumber++;
              }
            }
          }
        }
      }
        container.innerHTML = "Chuỗi nguyên tố cần tìm là : " + output.toString();
    }
