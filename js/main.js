jQuery(document).ready(function ($) {
    $('#alholder').hide();
    
    $('.course-btn').click(function(){
        var cid = $(this).attr('data-course');
        console.log(cid);
    });
});