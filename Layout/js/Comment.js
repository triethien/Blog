function DeleteComment(id) {
  
    console.log("Delete!!!");
      $.ajax({
          url: 'http://localhost:5101/api/comment?id='+id,
          method: 'DELETE',
          contentType: 'application/json',
          dataType: "json",
          success: function(result) {
              // handle success
            
              location.reload(true);
          },
          error: function(request,msg,error) {
              // handle failure
          }
          });
  }
  function AddComment() {
    
    console.log("Add!!!");
      $.ajax({
          url: 'http://localhost:5101/api/comment',
          type: 'POST',
          contentType: 'application/json',
          data: JSON.stringify({
              Content:$("#Content").val(),
      ArticleId: $("#ArticleId").val(),
      AuthorId:$("#AuthorId").val(),
          }),
          dataType: 'json'
      });
    
  
  }
  function EditCommentConfirm(id) {
    
    console.log("Edit!!!");
      $.ajax({
          url: 'http://localhost:5101/api/comment?id='+id,
          method: 'PUT',
          contentType: 'application/json',
          data: JSON.stringify({
              Content:$("#Content").val(),
      ArticleId: $("#ArticleId").val(),
      AuthorId:$("#AuthorId").val(),
          }),
          dataType: "json",
          success: function(result) {
              // handle success
            
              location.reload(true);
          },
          error: function(request,msg,error) {
              // handle failure
          }
          });
  }
  function EditComment(d) {
    
    $("#show").css("display", "block");
    $.getJSON("http://localhost:5101/api/comment", function (emp) {
      $("#ID").val(emp[d].id);
      $("#Content").val(emp[d].content);
      $("#ArticleId").val(emp[d].articleId);
      $("#AuthorId").val(emp[d].authorId);
  
            });
    
  
  }
        $(document).ready(function () {
          
          
            $.getJSON("http://localhost:5101/api/Comment", function (emp) {
              for (var i = 0; i < emp.length; i++) {
                var td = '<tr><td>' + emp[i].id + '</td>'
                  + '<td>' + emp[i].content + '</td>'
                  + '<td>' + emp[i].articleId + '</td> '
                  + '<td>' + emp[i].authorId + '</td> '
                  + '<td><button style="margin-right:20px" onclick="DeleteComment(\'' + emp[i].id + '\')">Delete</button><button onclick="EditComment(\'' + i+ '\')">Edit</button></td></tr>'
                  ;
                  $("tbody").append("<p>" + td + "</p>");
                
              }
            });
          
          $("#add").click(function (event) {
            $("#show").css("display", "block");
  
            });
  
            $("#confirmBtn").click(function (event) {
            if($('#ID').val()=="")
            {
              AddComment();
              $("#show").css("display", "none");
              location.reload();
            }
            else{
              EditCommentConfirm($('#ID').val());
              $("#show").css("display", "none");
            }
            
          });
          $("#cancel").click(function (event) {
            $("#ID").val("");
      $("#Content").val("");
      $("#ArticleId").val("");
      $("#AuthorId").val("");
            $("#show").css("display", "none");
          });
  
  
  
  
          });
          
          
  
  