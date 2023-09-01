let validate = () => {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var contactNumber = document.getElementById('contactNumber');
    var nameRegex = /^[a-zA-Z]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var contactRegex = /^\d{10}$/;

    if (name.value.trim() == "" || email.value.trim() == "" || contactNumber.value.trim() == "") {
        alert("filed can't be empty")
        return false;
    }
    else if (!nameRegex.test(name.value)) {
        alert("invalid name");
        return false;
    }
    else if (!emailRegex.test(email.value)) {
        alert("invalid email");
        return false;
    }
    else if (!contactRegex.test(contactNumber.value)) {
        alert("invalid contact number");
        return false;
    }
    else {
        true;
    }

}