jQuery(document).ready(function ($) {
    $('#alholder').hide();

    $('.course-btn').click(function(){
        var cid = $(this).attr('data-course');
        $('#alholder').fadeIn(600);
        console.log(cid);
        writeUserData(cid);
    });

    $('#clbtn').click(function(){
        $('#alholder').show().hide();
        console.log("cat");
    });

    function writeUserData(cid) {
        var d = new Date();
        var year = d.getFullYear() + "/";
        var month = (d.getMonth() + 1) + "/";
        var day = d.getDate() + "/";
        var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
        console.log(time.slice(0,))
        firebase.database().ref('times/' + year + month + day + time).set({
            course: cid
        });
    }
});
