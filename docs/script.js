function splitBill(tipPercent) {
    var billSplit = document.getElementById('bill-amnt-split');
    var tipSplit = document.getElementById('tip-amnt-split');

    var billAmnt = getValue('bill-amnt');
    var noOfPersons = getValue('no-ppl');

    var tipSplitAmnt = 0;
    var billSplitAmnt = 0;

    if (noOfPersons == 0) {
        displayError(true);
    } else {
        displayError(false);

        tipSplitAmnt = (billAmnt * tipPercent / noOfPersons).toFixed(2);
        billSplitAmnt = (billAmnt / noOfPersons).toFixed(2);

        tipSplit.innerHTML = `\$${tipSplitAmnt}`;
        billSplit.innerHTML = `\$${billSplitAmnt}`;
    }
}

function getValue(documentId) {
    var element = document.getElementById(documentId);
    return element.value;
}

function displayError(flag) {
    var errMsg = document.getElementsByClassName('err-msg');
    var pplInput = document.getElementById('ppl-input');

    if (flag) {
        errMsg[0].innerHTML = "Can't be zero.";
        pplInput.style.outline = "solid";
        pplInput.style.outlineColor = "red";
        pplInput.style.outlineWidth = "1px";
    } else {
        pplInput.style.outline = "none"
        errMsg[0].innerHTML = "";
    }
}

function reset() {
    var elements = [
        document.getElementsByClassName('five'),
        document.getElementById('bill-amnt-split'),
        document.getElementById('tip-amnt-split'),
        document.getElementById('bill-amnt'),
        document.getElementById('no-ppl'),
        document.getElementById('custom')
    ];

    elements.map((element) => {
        element.value = '';
        element.innerHTML = '';
    });
}

var custom = document.getElementById('custom');

custom.addEventListener("keyup", function(event) {
    if (event.key === "Enter")
        splitBill(custom.value / 100);
});