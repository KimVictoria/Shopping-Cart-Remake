var cart = [];

var pictures = [];

var prices = [];

$(".addtocart").click(function() {
    var items = $(".albumname").val();
    var picture = $(".picture").val();
    var moolah = $(".prices").val();
    var purchase = (parseInt(moolah));
    cart.push(items);
    pictures.push(pictures);
    prices.push(purchase);
    
    $(".itemsec").append(
            `<div class="row"> 
                <h2>${items}</h2>
            </div>`);
    $(".picturesec").append(
            `<div class="row"> 
                <img class="imagestuff" src="${picture}">
            </div>`);
    $(".pricesec").append(
            `<div class="row"> 
                <h2>$ ${moolah}</h2>
            </div>`);
            
    $(".albumname").val('');
    $(".picture").val('');
    $(".prices").val('');
            
    if (items === "") {
    alert("You are missing the item input. Please try again");
    } else if (picture === "") {
    alert("You are missing the picture input. Please try again");
    } else if (moolah === "") {
    alert("You are missing the money input. Please try again");
    }
            
    var length = (cart.length);
    $(".cartamount").text(length);
    
    var total= 0;
    parseInt(total);
    
    prices.forEach(function(themoolah) {
        total = total + themoolah;
        $(".priceamount").text(total);
        
$(".order").click(function() {
    alert("Thank you for shopping at the BossMinervax store. Your total is $" + total + ". See you next time!");
    });
    });
});




    





