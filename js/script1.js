var link = document.querySelector(".search-form-header");
var popup = document.querySelector(".search-form");
var calendar = document.querySelector("[id=calendar-to]");
window.addEventListener("load", function(event) {
    event.preventDefault();
    popup.classList.add("content-hidden");
});
link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.toggle("content-show");
    calendar.focus();
});
	
						