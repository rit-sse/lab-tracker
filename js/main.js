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
        var time = new Date().toLocaleString();
        firebase.database().ref('times/' + time).set({
            course: cid
        });
    }
});
