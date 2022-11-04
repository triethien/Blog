function addUser() {
    console.log("add")
    var name = $("#InputDisplayName").val();
    var email = $("#InputEmail").val();
    var address = $("#InputAddress").val();
    var phone = $("#InputPhone").val();
    
    var sendInfo = {
        displayName: name,
        email: email,
        phone: phone,
        address:address
    };
    console.log(sendInfo);
    $.ajax({
        url: "http://localhost:5101/api/user",
        type: "POST",
        headers: {
            'Content-Type': 'application/json'
          },
        dataType: "json",
        data: JSON.stringify(sendInfo),
        success: function (msg) {
            if (msg) {
                alert("success");
                location.reload(true);
            } else {
                alert("Cannot add to list !");
            }
        }
    });
}
