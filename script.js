
document.querySelector(".nav-cart").addEventListener("click", function (){
    alert("🛒 Your cart is currently empty!");
});


document.querySelector(".nav-singin").addEventListener("click", function () {
    alert("🔐 Please sign in to your account.");
});


document.querySelector(".search-icon").addEventListener("click", function ()
 {
    const input = document.querySelector(".search-input").value;
    if (input.trim() === "") {
        alert("Please enter something to search.");
    } else
     {
        alert("You searched for: " + input);
    }
});


document.querySelector(".foot-panel").addEventListener("click", function () 
{
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
