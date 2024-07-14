function confirmEmail() {
    const email1 = document.getElementById("email-initial").value;
    const email2 = document.getElementById("email-confirm").value;
    if (email1 === email2) {
        alert("Form successfully submitted")
        return true
    }
    alert("Email's do not match.")
    return false
}
