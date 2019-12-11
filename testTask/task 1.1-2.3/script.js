/*Скрыть Заголовок */
$(document).ready(function(){
    $("#hide").click(function () {
        if ($("#content").is(":hidden")) {
            $("#content").show("slow");
        } else {
            $("#content").hide("slow");
        }
        return false;
    });
});
/*Поменять местами блоки */
$('#swap').on('click', function(){
    var A = $('.sub-box-2');
    var B = $('.sub-box-1');
    A.replaceWith(B.clone());
    B.replaceWith(A);
});
/*Модальное окно */
$(document).ready(function($) {
	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
    });        
    
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
    });
    
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});	
});