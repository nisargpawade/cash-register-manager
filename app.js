const billAmount = document.querySelector('#bill-amount');
const nextBtn = document.querySelector('#next-btn');
const cashGiven = document.querySelector('#cash-given');
const checkBtn = document.querySelector('#check-btn');
const errorMsg = document.querySelector('#error-message');

const notes = [2000, 500, 100, 20, 10, 5, 1]

function calculateChange(amtToReturn) {
    for (i, i< notes.length, i++) {
        const noOfChange = Math.trunc(amtToReturn/i)
        const remainingChange = amtToReturn%i
        console.log(noOfChange)
        console.log(remainingChange)
        amtToReturn = remainingChange
    }
};

function showMsg(msg) {
    errorMsg.innerText = msg;
    errorMsg.style.display = "block";
};

function hideMsg() {
    errorMsg.style.display = "none";
};

nextBtn.addEventListener("click", function validateBillAmt() {})

checkBtn.addEventListener("click", function validateAmt() {
    hideMsg();
    if (billAmount.value > 0) {
        if (Number(cashGiven.value) >= Number(billAmount.value)) {
            showMsg(Math.trunc(9/2));
            const amtToReturn = cashGiven.value - billAmount.value;
            console.log(amtToReturn)
            calculateChange(amtToReturn)
        } else {
            showMsg("Cash given is less than the Bill Amount")};
    }
    else {
        showMsg("Enter valid Bill Amount")};
});
