




function confirm() {
    var divMoney = document.getElementById("divMoney")
    var money = document.getElementById("moneyCount");
    var inputNumberMoney  = document.getElementById("inputMoney");
    divMoney.style.display = ""

    document.getElementById("inputDiv").style.display = "none";
    money.innerHTML = inputNumberMoney.value;
}
