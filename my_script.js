$(document).ready(function () {
    loadTable();
    Login();
    singup();
    insert();
    update();
    delet();
});

function loadTable()
{
    $("#loadTable").load('PHP/loadTable.php');
}

function Login()
{
    $(document).on('click', '.login', function (){
        var name = $("#userName").val();
        var pass = $("#password").val();

        if(name == "" || pass == "")
        {
            if (name == "")
            {
                $("#messageName").html("Please enter user name"); 
            }

            if (name != "")
            {
                $("#messageName").html("");
            }

            if (pass == "")
            {
                $("#messagePassword").html("Please enter password");   
            }
        }

        else if(name != "" || pass != "")
        {
            $("#messageName").html("");
            $("#messagePassword").html("");

            $.ajax({
                url:'PHP/login.php',
                type:'post',
                data:{sendName:name, sendPass:pass},

                success:function(d){
                    $("#messageError").html(d);
                    $("#form").trigger('reset');

                    if (d.indexOf('success') >= 0)
                    {
                        window.location = 'home.php';
                    }
                }
            });
        }
    });
}

function singup()
{
    $(document).on('click', '.singup', function (){
        var name = $("#name").val();
        var email = $("#email").val();
        var pass = $("#password").val();
        var conPass = $("#conPassword").val();

        if(name =="" || email =="" || pass=="" || conPass =="")
        {
            if(name == "")
            {
                $("#messageName").html("Please Enter Your Name");
            }
    
            if (email == "")
            {   
                $("#messageEmail").html("Please Enter Your Email");
            }

            if (pass == "")
            {
                $("#messagePassword").html("Please Enter Your Password");
            }
    
            if (conPass == "")
            {
                $("#messageRepeatPassword").html("Please Enter Repeat your password");
            }
        }

        else if(name !="" || email !="" || pass!="" || conPass !="")
        {
            $("#messageName").html("");
            $("#messageEmail").html("");
            $("#messagePassword").html("");
            $("#messageRepeatPassword").html("");

            if(pass != conPass)
            {
                $("#RepeatPassword").html("Password Not Match");
            }

            else
            {
                $("#RepeatPassword").html("");

                $.ajax({
                    url:'PHP/register.php',
                    type:'post',
                    data:{sendName:name, sendPass:pass, sendEmail:email, sendconPass:conPass},
    
                    success:function(d){
                        $("#messageSuccess").html(d)
                        $("#form").trigger('reset');
                        
                    }
                });
            }
        }
    });
}

function insert()
{
    $(document).on('click', '.save', function () {
        $.ajax({
            url:'PHP/insert.php',
            type:'post',
            data:$("#save").serialize(),

            success:function (d)
            {
                $("#successMessage").html(d)
                $("#save").trigger('reset');
                loadTable();
            }
        });
    });
}

function update()
{
    $(document).on('click', '.edit', function () {
        var row = $(this);
        var id = $(this).attr('data-id');
        
        var eId = $('#'+id).children('td[data-target=id]').text();
        var name = $('#'+id).children('td[data-target=name]').text();
        var email = $('#'+id).children('td[data-target=email]').text();
        var address = $('#'+id).children('td[data-target=address]').text();
        var phone = $('#'+id).children('td[data-target=phone]').text();

        var trimId = $.trim(eId);
        var trimName = $.trim(name);
        var trimEmail = $.trim(email);
        var trimAddress = $.trim(address);
        var trimPhone = $.trim(phone);
        
        $('#editId').val(trimId);
        $("#editName").val(trimName);
        $("#editAddress").val(trimAddress);
        $("#editEmail").val(trimEmail);
        $("#editPhone").val(trimPhone);

        $("#editEmployeeModal").modal('toggle');

        $(document).on('click', '.update', function () {
            $.ajax({
                url:'PHP/update.php',
                type:'post',
                data:$("#update").serialize(),
                success:function (d)
                {
                    $("#updateMessage").html(d)
                    $("#update").trigger('reset');
                    loadTable();
                }
            });
        });
    });
}

function delet()
{
    $(document).on('click', '.delete', function () {
        $("#deleteEmployeeModal").modal('show');
        var id = $(this).attr('data-id');

        $(document).on('click', '.del', function () {
            $.ajax({
                url:'PHP/delete.php',
                type:'post',
                data:{
                    sendID : id,
                },
    
                success:function (d)
                {
                    loadTable();
                    $("#deleteEmployeeModal").modal('hide');
                }
            });
        });
    });
}