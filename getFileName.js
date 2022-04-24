function(element, value) {
    element = document.getElementById(value) 
    return element.getAttribute("data-docfilename");
}