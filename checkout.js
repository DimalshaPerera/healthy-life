let storedBasketItems = sessionStorage.getItem('basketItems');
if (storedBasketItems) {
    basketItems = JSON.parse(storedBasketItems);
}
// Function to display basket details
function displayBasketDetails() {

    const basketProducts = document.querySelector('.basketproducts');
    const basketTotal = document.querySelector('.baskettotal');
    basketProducts.innerHTML += `<h2>Your Order Summary</h2><hr>`;
    let total = 0;
    for (let i = 0; i < basketItems.length; i++) {
        const item = basketItems[i];
        basketProducts.innerHTML += `<div class="products"><div><img src="${item.image}"></div>
            <div>${item.title} X ${item.quantity} = Rs.${item.price * item.quantity}</div>
            </p></div>`;
        total += item.price * item.quantity;

    }
    basketTotal.innerHTML += `<hr><h2>Total Price is Rs.${total}</h2>`;


}
// Call the function to display basket details when the page loads
displayBasketDetails();

const form = document.getElementById('form');
const cardNumber = document.getElementById('cardnumber');
const cardNumberIcon = document.getElementById('cardnumbererror');
const cardHolder = document.getElementById('cardholder');
const cardHolderIcon = document.getElementById('cardholdererror');
const expDate = document.getElementById('expirydate');
const expDateIcon = document.getElementById('expdateerror');
const ccv = document.getElementById('ccv');
const ccvIcon = document.getElementById('ccverror');

const address1 = document.getElementById('address1');
const address1Icon = document.getElementById('address1error');
const town = document.getElementById('town');
const townIcon = document.getElementById('townerror');
const zip = document.getElementById('zipcode');
const zipIcon = document.getElementById('ziperror');


const fname = document.getElementById('fname');
const fnameIcon = document.getElementById('fnameerror');
const phone = document.getElementById('phone');
const phoneIcon = document.getElementById('phoneerror');
const email = document.getElementById('email');
const emailIcon = document.getElementById('emailerror');



//what happens when form is submitted
form.addEventListener('submit', e => {
    let errorMessages = []
    if (cardNumber.value.length !== 16) {  //check if 16 digits are typed in
        alert("card should be 16 digits")
        cardNumber.style.borderColor = 'red';
        errorMessages.push("error");
    }

    if (ccv.value.length !== 3) {
        alert("CCV should be 3 digits")
        ccv.style.borderColor = 'red';
        errorMessages.push("error");
    }

    if (!phone.value.match(/^[0-9]{10}$/)) {         //check if its 10 digits
        alert("phone number should be 10 digits")
        phone.style.borderColor = 'red';
        console.log(10);
        errorMessages.push("error");
    }

    if (!zip.value.match(/^[0-9]{5}$/)) {         //check if its 5 digits
        alert("zipcode should be 5 digits")
        zip.style.borderColor = 'red';
        errorMessages.push("error");
    }

    if (!email.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/)) {
        errorMessages.push("error");
    }

    if (errorMessages.length !== 0) {
        e.preventDefault();
    }

    if (errorMessages.length === 0) {
        alert("checkout successful you are being redirected to the homepage")
    }




});


//constantly remind user of his progress


cardNumber.addEventListener('input', function () {
    if (cardNumber.value.length === 0) {
        cardNumberIcon.innerHTML = ``;

    }
    else if (cardNumber.value.length !== 16) {
        cardNumberIcon.innerHTML = `     <i class="fa-solid fa-circle-xmark" style="color:red"></i>`
    }
    else {
        cardNumberIcon.innerHTML = `     <i class="fa-solid fa-circle-check" style="color:green"></i>`
    }
});

ccv.addEventListener('input', function () {

    if (ccv.value.length === 0) {
        ccvIcon.innerHTML = ``;
    }
    else if (ccv.value.length != 3) {
        ccvIcon.innerHTML = `     <i class="fa-solid fa-circle-xmark" style="color:red"></i>`

    }
    else {
        ccvIcon.innerHTML = `     <i class="fa-solid fa-circle-check" style="color:green"></i>`
    }

});

cardHolder.addEventListener('input', function () {

    if (cardHolder.value.length === 0) {
        cardHolderIcon.innerHTML = ``;
    }
    else {
        cardHolderIcon.innerHTML = `     <i class="fa-solid fa-circle-check" style="color:green"></i>`
    }

});

expDate.addEventListener('input', function () {

    if (expDate.value.length === 0) {
        expDateIcon.innerHTML = ``;
    }
    else {
        expDateIcon.innerHTML = `     <i class="fa-solid fa-circle-check" style="color:green"></i>`
    }

});


address1.addEventListener('input', function () {

    if (address1.value.length === 0) {
        address1Icon.innerHTML = ``;
    }
    else {
        address1Icon.innerHTML = `     <i class="fa-solid fa-circle-check" style="color:green"></i>`;
    }
});



town.addEventListener('input', function () {
    if (town.value.length === 0) {
        townIcon.innerHTML = ``;
    }
    else {
        townIcon.innerHTML = `     <i class="fa-solid fa-circle-check" style="color:green"></i>`;
    }

});



zip.addEventListener('input', function () {
    if (zip.value.length === 0) {
        zipIcon.innerHTML = ``;
    }
    else if (zip.value.length !== 5) {
        zipIcon.innerHTML = `     <i class="fa-solid fa-circle-xmark" style="color:red"></i>`

    }
    else {

        zipIcon.innerHTML = `     <i class="fa-solid fa-circle-check" style="color:green"></i>`;

    }

});



fname.addEventListener('input', function () {
    if (fname.value.length === 0) {
        fnameIcon.innerHTML = ``;
    }
    else {
        fnameIcon.innerHTML = `     <i class="fa-solid fa-circle-check" style="color:green"></i>`;
    }

});



phone.addEventListener('input', function () {
    if (phone.value.length === 0) {
        phoneIcon.innerHTML = ``;
    }
    else if (phone.value.length !== 10) {
        phoneIcon.innerHTML = `     <i class="fa-solid fa-circle-xmark" style="color:red"></i>`;
    }
    else {
        if (phone.value.match(/^[0-9]{10}$/)) {         //check if its all digits
            phoneIcon.innerHTML = `     <i class="fa-solid fa-circle-check" style="color:green"></i>`;
        }
    }

});

email.addEventListener('input', function () {
    if (!email.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/)) {
        emailIcon.innerHTML = `     <i class="fa-solid fa-circle-xmark" style="color:red"></i>`;
    }
    else if (email.value.match === 0) {
        emailIcon.innerHTML = ``;
    }
    else {
        emailIcon.innerHTML = `     <i class="fa-solid fa-circle-check" style="color:green"></i>`;
    }

});




