const billAmount = document.querySelector('#bill-amount');
const nextBtn = document.querySelector('#next-btn');
const cashGiven = document.querySelector('#cash-given');
const checkBtn = document.querySelector('#check-btn');
const errorMsg1 = document.querySelector("#error-message1")
const errorMsg = document.querySelector('#error-message2');
const noOfNotes = document.querySelectorAll('.no-of-notes');
const nextContainer = document.querySelector('#next-container');

const notes = [2000, 500, 100, 20, 10, 5, 1];

function calculateChange(amtToReturn) {
    for (let i=0; i< notes.length; i++) {
        const noOfChange = Math.trunc(amtToReturn/notes[i])
        const remainingChange = amtToReturn%notes[i]
        console.log(noOfChange)
        console.log(remainingChange)
        amtToReturn = remainingChange
        if (noOfChange == 0){ noOfNotes[i].innerText = " ";
            // noOfNotes[i].style.display = "none"
        }
        else {
            noOfNotes[i].style.display = "in-line";
            noOfNotes[i].innerText =noOfChange }
    }
};

function showMsg(msg) {
    errorMsg.innerText = msg;
    errorMsg.style.display = "block";
};

function hideMsg() {
    errorMsg.style.display = "none";
};

nextContainer.style.display = "none";
nextBtn.addEventListener("click", function validateBillAmt() {
    errorMsg1.style.display = "none";
    if (billAmount.value > 0) {
        nextContainer.style.display = "block";
    } else { errorMsg1.style.display= "block";
        errorMsg1.innerText="Please Enter Valid Bill Amount"}
})

checkBtn.addEventListener("click", function validateAmt() {
    if (billAmount.value > 0 && cashGiven.value > 0) {
        if (Number(cashGiven.value) >= Number(billAmount.value)) {
            hideMsg();
            const amtToReturn = cashGiven.value - billAmount.value;
            console.log(amtToReturn)
            calculateChange(amtToReturn)
        } else {
            showMsg("Cash given is less than the Bill Amount")};
    }
    else {
        showMsg("Enter valid Bill Amount")};
});
