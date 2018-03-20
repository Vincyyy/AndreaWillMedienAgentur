var offset = $(':target').offset();
var scrollto = offset.top - 80; // minus fixed header height
$('html, body').animate({scrollTop:scrollto}, 500);