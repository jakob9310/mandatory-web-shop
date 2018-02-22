// Validate checkout form
function validateForm() {
    var fName = document.forms["checkoutForm"]["firstName"].value;
    var lName = document.forms["checkoutForm"]["lastName"].value;
    var email = document.forms["checkoutForm"]["email"].value;
    var address = document.forms["checkoutForm"]["address"].value;
    var zip = document.forms["checkoutForm"]["zip"].value;
    var city = document.forms["checkoutForm"]["city"].value;

    if (fName === "") {
        alert("First Name must be filled out");
        return false;
    }
    if (fName !== "") {
        document.getElementById("validate1").innerHTML = "";
        if (lName === "") {
            alert("Last Name must be filled out");
            return false;
        }
        if (lName !== "") {
            document.getElementById("validate2").innerHTML = "";
            if (email === "") {
                alert("Email must be filled out");
                return false;
            }
            if (email !== "") {
                document.getElementById("validate3").innerHTML = "";
                if (address === "") {
                    alert("Address must be filled out");
                    return false;
                }
                if (address !== "") {
                    document.getElementById("validate4").innerHTML = "";
                    if (zip === "") {
                        alert("Zip must be filled out");
                        return false;
                    }
                    if (zip !== "") {
                        document.getElementById("validate5").innerHTML = "";
                        if (city === "") {
                            alert("City must be filled out");
                            return false;
                        }
                        if (city !== "") {
                            document.getElementById("validate6").innerHTML = "";
                            return true;
                        }
                        return false;
                    }
                    return false;
                }
                return false;
            }
            return false;
        }
        return false;
    }
}