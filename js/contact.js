document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    fetch("https://yourbackend.infinityfreeapp.com/contact.php", {
        method: "POST",
        body: new FormData(this)
    })
    .then(res => res.text())
    .then(data => alert(data))
    .catch(err => alert("Error: " + err));
});
