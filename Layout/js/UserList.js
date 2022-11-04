var dataget;
$(document).ready(function () {

    $.ajax({
        url: 'http://localhost:5101/api/user',
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        success: function (result) {
            dataget = result;
            console.log(result);
            $('tbody').empty();
            reloadUserlist(result);
            $('#UserList').DataTable()
        }
    });
});
function reloadUserlist(result) {
    var j = 0;
    //Duyệt kết quả trả về
    for (let i = 0; i < result.length; i++) {
        //Tạo thông tin dòng
        if (j % 2 == 0) { var tr = '<tr class=\"trc\">'; }
        else { { var tr = '<tr class=\"trl\">'; } };
        //Thêm thông tin cột cho dòng
        console.log(result[i]);
        var td = '<td>' + result[i].id + '</td>'
            + '<td>' + result[i].displayName + '</td>'
            + '<td>' + result[i].email + '</td> '
            + '<td>' + result[i].phone + '</td> '
            + '<td>' + result[i].dateOfBirth + '</td> '
            + '<td>' + result[i].address + '</td> '
            + '<td><button onclick="EditUser(\'' + i + '\')" class="btn btn-primary"></button></td>'
            + '<td><button onclick="DeleteUser(\'' + result[i].id + '\')" class="btn btn-danger"></button></td>'
            ;
        //Mở rộng nội dung dòng
        tr += td + '</tr>';
        j++;
        $('tbody').append(tr);
    }

}
function DeleteUser(id) {

    console.log("Xóa nè");
    $.ajax({
        url: 'http://localhost:5101/api/user?id=' + id,
        method: 'DELETE',
        contentType: 'application/json',
        dataType: "json",
        success: function (result) {
            // handle success

            location.reload(true);
        },
        error: function (request, msg, error) {
            // handle failure
        }
    });
}
function CloseEditUserConfirm(){ $("#show").css("display", "none");}
var editID;
function EditUserConfirm() {

    console.log("Edit!!!");
    $.ajax({
        url: 'http://localhost:5101/api/user?id=' + editID,
        method: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify({
            displayName: $("#DisplayName").val(),
            email: $("#Email").val(),
            phone: $("#Phone").val(),
            dateOfBirth: $("#DateOfBirth").val(),
            address: $("#Address").val(),
        }),
        dataType: "json",
        success: function (result) {
            // handle success

            location.reload(true);
        },
        error: function (request, msg, error) {
            // handle failure
        }
    });
}
function EditUser(p) {
    console.log(p);
    console.log(dataget[p]);
    editID=dataget[p].id;
    $("#show").css("display", "block");
    $("#ID").val(dataget[p].id);
    $("#DisplayName").val(dataget[p].displayName);
    $("#Email").val(dataget[p].email);
    $("#Phone").val(dataget[p].phone);
    $("#DateOfBirth").val(dataget[p].dateOfBirth);
    $("#Address").val(dataget[p].address);
}