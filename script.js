```javascript
const form = document.getElementById("requestForm");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const friendName =
    document.getElementById("friendName").value.trim();

  const friendNumber =
    document.getElementById("friendNumber").value.trim();

  const amount =
    Number(document.getElementById("amount").value);

  const reason =
    document.getElementById("reason").value.trim();

  // Kenyan mobile number validation
  const phonePattern = /^07\d{8}$/;

  if (!phonePattern.test(friendNumber)) {
    alert("Please enter a valid Kenyan phone number, e.g. 0712345678.");
    return;
  }

  if (amount < 10 || amount > 150000) {
    alert("Please enter an amount between KSh 10 and KSh 150,000.");
    return;
  }

  if (reason.length < 3) {
    alert("Please provide a reason for the request.");
    return;
  }

  const message =
    `Hi ${friendName}, I'm requesting KSh ${amount.toLocaleString()} ` +
    `for: ${reason}. Payment recipient: 0716861975.`;

  document.getElementById("requestText").textContent = message;

  document.getElementById("displayAmount").textContent =
    `KSh ${amount.toLocaleString()}`;

  result.classList.remove("hidden");

  result.scrollIntoView({
    behavior: "smooth"
  });
});

function copyRequest() {
  const text =
    document.getElementById("requestText").textContent;

  navigator.clipboard.writeText(text)
    .then(() => {
      alert("Payment request copied!");
    })
    .catch(() => {
      alert("Unable to copy. Please copy the message manually.");
    });
}
```
