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
        $.validator.setDefaults({
            submitHandler:function() {
                $.ajax({
                    url:'PHP/register.php',
                    type:'post',
                    data:$("#Siform").serialize(),
    
                    success:function(d){
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your account has been created',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        $("#Siform").trigger('reset');
                    }
                });
            }
        })

        $("#Siform").validate({
            errorClass: 'error',
            rules:{
                sendName:"required",
                sendEmail:{
                    email:true,
                    required:true
                },
                sendPass:{
                    required:true,
                    minlength:5
                },
                sendconPass:{
                    required:true,
                    minlength:5,
                    equalTo:"#sendPass"
                }
            },
            messages:{
                sendName:"Pleas Enter Your Name",
                sendEmail:{
                    email:"Please Enter The Valid Email Address",
                    required:"Please Enter Your Email Id"
                },
                sendPass:{
                    required:"Please Enter Your Password",
                    minlength:"Password Length Must be 5"
                },
                sendconPass:{
                    required:"Please Enter Your Confirm Password",
                    minlength:"Password Length Must be 5",
                    equalTo:"Mismatch Password"
                }
            }
        })
    });
}

function insert()
{
    $(document).on('click', '.save', function () {
        $.validator.setDefaults({
            submitHandler:function() {
                $.ajax({
                    url:'PHP/insert.php',
                    type:'post',
                    data:$("#save").serialize(),
        
                    success:function (d)
                    {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your work has been saved',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        $("#save").trigger('reset');
                        $("#addEmployeeModal").modal('hide');
                        loadTable();
                    }
                });
            }
        })

        $("#save").validate({
            errorClass: 'error',
            rules:{
                name:"required",
                email:{
                    email:true,
                    required:true
                },
                address:"required",
                phone:{
                    required:true,
                    digits:true,
                    maxlength:10,
                    minlength:10
                }
            },
            messages:{
                name:"Pleas Enter Your Name",
                email:{
                    email:"<span style='color:red'>Please Enter The Valid Email Address</span>",
                    required:"Please Enter Your Email Id"
                },
                address:"Please Enter Your Address",
                phone:{
                    required:"Please Enter Your Contact number",
                    digits:"Cotact No Must Be numeric",
                    maxlength:"length Must 10",
                    minlength:"length must 10"
                }
            }
        })
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
        $("#updateMessage").html("");

        $(document).on('click', '.update', function () {
            $.validator.setDefaults({
                submitHandler:function() {
                    $.ajax({
                        url:'PHP/update.php',
                        type:'post',
                        data:$("#update").serialize(),
                        success:function (d)
                        {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Your work has been updated',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            
                            $("#editEmployeeModal").modal('hide');
                            loadTable();
                        }
                    });
                }
            })

            $("#update").validate({
                errorClass: 'error',
                rules:{
                    editName:"required",
                    editEmail:{
                        email:true,
                        required:true
                    },
                    editAddress:"required",
                    editPhone:{
                        required:true,
                        digits:true,
                        maxlength:10,
                        minlength:10
                    }
                },
                messages:{
                    editName:"Pleas Enter Your Name",
                    editEmail:{
                        email:"<span style='color:red'>Please Enter The Valid Email Address</span>",
                        required:"Please Enter Your Email Id"
                    },
                    editAddress:"Please Enter Your Address",
                    editPhone:{
                        required:"Please Enter Your Contact number",
                        digits:"Cotact No Must Be numeric",
                        maxlength:"length Must 10",
                        minlength:"length must 10"
                    }
                }
            })
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
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your data has been deleted',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    
                    $("#deleteEmployeeModal").modal('hide');
                    
                    loadTable();
                    
                }
            });
        });
    });
}