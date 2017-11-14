$(document).ready(function () {
    $("#menuId").load("./menu.html");
    
    $('.dropdown-toggle').dropdown()


    $("#ActualDetails").hide();
    $("[type=radio]").click(function () {
        if (this.value == "Prospect") {
            $("#ActualDetails").hide();
            $("#ProspectDetails").show();
        }

        else {
            $("#ActualDetails").show();
            $("#ProspectDetails").hide();
        }
    });


    $("#ddlMDCat").change(function () {
        if (this.value == "Work Category")
            $("#content").html($("#WorkCat").html());
        else if (this.value == "Capability")
            $("#content").html($("#Capability").html());
        else
            $("#content").html("");


        if (this.value == "")
            $("#CreateForm").css("display", "none");
        else
            // $("#CreateForm").removeAttr("display");
            $("#CreateForm").css("display", "");



    });

})