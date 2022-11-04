function DeleteArticle(id) {
  
    console.log("Delete!!!");
      $.ajax({
          url: 'http://localhost:5101/api/article?id='+id,
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
  function AddArticle() {
    
    console.log("Add!!!");
      $.ajax({
          url: 'http://localhost:5101/api/article',
          type: 'POST',
          contentType: 'application/json',
          data: JSON.stringify({
              Title:$("#Title").val(),
      Content: $("#Content").val(),
      ViewCount:$("#ViewCount").val(),
      AuthorId:$("#AuthorId").val(),
          }),
          dataType: 'json'
      });
    
  
  }
  function EditArticleConfirm(id) {
    
    console.log("Edit!!!");
      $.ajax({
          url: 'http://localhost:5101/api/article?id='+id,
          method: 'PUT',
          contentType: 'application/json',
          data: JSON.stringify({
            Title :$("#Title").val(),
            Content: $("#Content").val(),
            ViewCount:$("#ViewCount").val(),
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
  function EditArticle(d) {
    
    $("#show").css("display", "block");
    $.getJSON("http://localhost:5101/api/article", function (emp) {
      $("#ID").val(emp[d].id);
      $("#Title").val(emp[d].title);
      $("#Content").val(emp[d].content);
      $("#ViewCount").val(emp[d].viewCount);
      $("#AuthorId").val(emp[d].authorId);
  
            });
  }