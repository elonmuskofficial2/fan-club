// SELECT MEMBERSHIP

function selectPlan(plan, price, card) {

    document.getElementById("membership").value = plan;
    document.getElementById("price").value = price;


    const cards = document.querySelectorAll(".plan-card");


    cards.forEach(function(item) {

        item.style.border = "2px solid transparent";

    });


    if (card) {

        card.style.border = "2px solid gold";

    }

}



// CONTINUE TO PAYMENT

function continueToPayment() {


    const name =
    document.getElementById("fanName").value.trim();


    const email =
    document.getElementById("fanEmail").value.trim();


    const phone =
    document.getElementById("phone").value.trim();


    const country =
    document.getElementById("country").value.trim();


    const membership =
    document.getElementById("membership").value;


    const price =
    document.getElementById("price").value;



    if (
        name === "" ||
        email === "" ||
        phone === "" ||
        country === "" ||
        membership === ""
    ) {

        showAlert();
        return;

    }
    



    localStorage.setItem("fanName", name);

    localStorage.setItem("fanEmail", email);

    localStorage.setItem("fanPhone", phone);

    localStorage.setItem("fanCountry", country);

    localStorage.setItem("fanMembership", membership);

    localStorage.setItem("fanPrice", price);



    window.location.href = "payment.html";


}




// PAGE LOAD FUNCTIONS

document.addEventListener(
"DOMContentLoaded",
function(){



    // SHOW PLAN ON PAYMENT PAGE


    const planElement =
    document.getElementById("selectedPlan");


    const priceElement =
    document.getElementById("selectedPrice");



    if(planElement && priceElement){


        const plan =
        localStorage.getItem("fanMembership");


        const price =
        localStorage.getItem("fanPrice");



        planElement.innerText =
        plan || "";


        priceElement.innerText =
        price ? "$" + price : "";

    }





    // AUTO SELECT FROM HOMEPAGE


    const membershipInput =
    document.getElementById("membership");


    const priceInput =
    document.getElementById("price");



    if(
        membershipInput &&
        priceInput
    ){


        const params =
        new URLSearchParams(
            window.location.search
        );


        const plan =
        params.get("plan");



        const cards =
        document.querySelectorAll(".plan-card");



        if(plan === "bronze"){

            selectPlan(
                "Bronze Membership",
                350,
                cards[0]
            );

        }



        if(plan === "silver"){

            selectPlan(
                "Silver Membership",
                540,
                cards[1]
            );

        }



        if(plan === "gold"){

            selectPlan(
                "Gold VIP Membership",
                720,
                cards[2]
            );

        }


    }


});




// COPY WALLET ADDRESS
function copyWallet() {

    const wallet = "1GtKu2RQn8zU1tGmjcYGTaJKqfKWqPEgrE";

    const button = document.getElementById("copyBtn");

    navigator.clipboard.writeText(wallet)
    .then(function () {

        button.innerHTML = "✓ Copied";
        button.disabled = true;

        setTimeout(function () {

            button.innerHTML = "Copy Wallet Address";
            button.disabled = false;

        }, 5000);

    })
    .catch(function () {

        button.innerHTML = "Copy Failed";

        setTimeout(function () {

            button.innerHTML = "Copy Wallet Address";

        }, 5000);

    });

}




    






// PAYMENT PENDING


function confirmPayment() {

    const button = document.getElementById("paymentBtn");

    button.disabled = true;

    button.innerText = "Processing...";

    setTimeout(function () {

        window.location.href = "payment-pending.html";

    }, 2500);

}
// CUSTOM ALERT

function showAlert() {

    document.getElementById("customAlert").style.display = "flex";

}

function closeAlert() {

    document.getElementById("customAlert").style.display = "none";

}