let seatsLeft = 40;
const seatPrice = 550;
let seatsBought = 0;
let totalPrice = 0;
let discountedPrice = 0;

const seats = document.querySelectorAll(".seat");
const discountedPriceEl = document.querySelector(".discounted-price");

seats.forEach((e) => e.addEventListener("click", seatHandler));

// callback function for buttons || seats
function seatHandler(e) {
  // disable button when clicked once
  e.target.disabled = true;

  // style the button when clicked
  e.target.style.backgroundColor = "#1dd100";
  e.target.style.color = "#fff";

  // Decrease remaining seats value and update the dom
  seatsLeft--;
  document.querySelector(".seats-left").innerHTML = seatsLeft;

  // increase ticketsbought value and update the dom
  seatsBought++;
  document.querySelector(".tickets-bought").innerHTML = seatsBought;
  document.querySelector(".total-price").innerHTML = 550 * seatsBought;
  discountedPriceEl.innerHTML = 550 * seatsBought;
  document.querySelector(".selected-seats-wrapper").innerHTML += `
  <div class="flex justify-between items-center pb-3">
  <p class="selected-seat">${e.target.innerHTML}</p>
  <p class="economy">Economy</p>
  <p class="price">550</p>
</div>
`;

  // remove event listener from the buttons when 4 seats are selected
  if (seatsBought >= 4) {
    seats.forEach((e) => e.removeEventListener("click", seatHandler));
  }

  // enable confirmation button if at least one ticket is selected
  seatsBought > 0 &&
    (document.querySelector(".confirmation-button").disabled = false);
}

// validate coupon code and disappear apply button after validation
document.querySelector(".discount-btn").addEventListener("click", () => {
  const couponInputValue = document.querySelector(".coupon-input").value;
  if (seatsBought === 4) {
    if (couponInputValue === "NEW15") {
      discountedPriceEl.innerHTML = 2200 - 2200 * 0.15;
      document.querySelector(".discount-btn").style.display = "none";
      document.querySelector(".coupon-input").style.display = "none";
    }
    if (couponInputValue === "Couple 20") {
      discountedPriceEl.innerHTML = 2200 - 2200 * 0.2;
      document.querySelector(".discount-btn").style.display = "none";
      document.querySelector(".coupon-input").style.display = "none";
    }
  }
});

// remove default refresh when confirmation button is clicked
document
  .querySelector(".confirmation-button")
  .addEventListener("click", (e) => {
    e.preventDefault();
    console.log("I have been enabled by the programmer");
  });
