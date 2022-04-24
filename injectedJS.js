function(element, value) {
    element = document.getElementById(value) 
    return "https://app.receipt-bot.com/" + element.getAttribute("data-docpath") + "/" + element.getAttribute("data-docfilename");
}