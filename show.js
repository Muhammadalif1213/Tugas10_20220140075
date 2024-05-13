function submitHobby() {
    var form = document.getElementById("hobbyForm");
    var displayHobby = document.getElementById("displayHobby");

    var nama = form.elements["nama"].value;
    var umur = form.elements["umur"].value;
    var hobi1 = form.elements["hobi1"].value;
    var hobi2 = form.elements["hobi2"].value;

    var minat = [];
    var checkboxes = document.getElementsByName("minat");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            minat.push(checkboxes[i].value);
        }
    }

    document.getElementById("displayNama").innerHTML = "<p><strong>Nama:</strong> " + nama + "</p>";
    document.getElementById("displayUmur").innerHTML = "<p><strong>Umur:</strong> " + umur + " tahun</p>";
    document.getElementById("hobbyList").innerHTML = 
        "<p><strong>Hobby:</strong> " + hobi1 + ", " + hobi2 +"</p>" +
        "<p><strong>Minat:</strong> " + minat.join(", ") + "</p>";

    displayHobby.style.display = "block";
}

function submitForm() {
    var form = document.getElementById("dataForm");
    var displayData = document.getElementById("displayData");

    var nama = form.elements["nama"].value;
    var gender = form.elements["gender"].value; 
    var umur = form.elements["umur"].value;
    var alamat = form.elements["alamat"].value;
    var email = form.elements["email"].value;
    var telepon = form.elements["telepon"].value;
    

    document.getElementById("displayNama").innerHTML = "<p><strong>Nama:</strong> " + nama + "</p>";
    document.getElementById("displayGender").innerHTML = "<p><strong>Jenis Kelamin:</strong> " + gender + "</p>";
    document.getElementById("displayUmur").innerHTML = "<p><strong>Umur:</strong> " + umur + " tahun</p>";
    document.getElementById("displayAlamat").innerHTML = "<p><strong>Alamat:</strong> " + alamat + "</p>";
    document.getElementById("displayEmail").innerHTML = "<p><strong>Email:</strong> " + email + "</p>";
    document.getElementById("displayTelepon").innerHTML = "<p><strong>Telepon:</strong> " + telepon + "</p>";


    displayData.style.display = "block";
}