var table = $('#example').DataTable();

$('#btn-1').on( 'click', function () {
    table.page.len( 3 ).draw();
} );

$('#btn-2').on( 'click', function () {
    table.page.len( 6 ).draw();
} );

$('#btn-3').on( 'click', function () {
    table.page.len( 9 ).draw();
} );
