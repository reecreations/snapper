$(window).load(function(){
$('button.remove').on('click', function (e) {
    e.preventDefault();
    var id = $(this).closest('tr').data('id');
    $('#deleteModal').data('id', id).modal('show');
});


$('button.btnDeleteYes').click(function () {
    var id = $('#deleteModal').data('id');
    $('[data-id=' + id + ']').remove();
    $('#deleteModal').modal('hide');
});



$(function () {
    $(".show_tip").tooltip({
        container: 'body'
    });
});
$(document).click(function () {
    $('.tooltip').remove();
    $('[title]').tooltip();
});
});