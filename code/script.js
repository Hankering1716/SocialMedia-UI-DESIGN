function confirm() {
    var divMoney = document.getElementById("divMoney")
    var money = document.getElementById("moneyCount");
    var inputNumberMoney  = document.getElementById("inputMoney");
    divMoney.style.display = ""

    document.getElementById("inputDiv").style.display = "none";
    money.innerHTML = inputNumberMoney.value;
}

function confirmBuy() {
    var currentMoney = document.getElementById("inputMoney").value;
    if(document.getElementById("buyingName").value == "" || document.getElementById("buying").value == "") {
        return ""
    }
    document.getElementById("costs").innerHTML += 
`Name: ${document.getElementById("buyingName").value} <br>
Cost: ${document.getElementById("buying").value}
Current money: ${currentMoney - document.getElementById("buying") }`

cost
}
