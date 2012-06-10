;(function($,window,undefined){

	$.fn.slides = function(ant, sig){
		return this.each(function(){
			$container = $(this).children().eq(0);
			if($container){
				var $fotos = $container.children();
				var cantidad = $fotos.length;
				var incremento = $fotos.outerWidth(true);
				var slide = Math.floor($(this).width() / incremento);
				var primerElemento = 1;
				var estamoviendo = false;
			}
			$container.css('width',(cantidad + slide) * incremento);
			for(var i=0; i<slide; i++){
				$container.append($fotos.eq(i).clone());
			}

			$(sig).click(function(e){
				//alert('hola son animacion');
				e.preventDefault();
				if(!estamoviendo){
					if(primerElemento > cantidad){
						primerElemento = 2;
						$container.css('left', '0px')
					}
					else{
						primerElemento++;
					}
					estamoviendo = true;
					$container.animate({
						left: '-=' + incremento,
						}, 'swing', function(){
							estamoviendo = false;
						});
				}
			});
			$(ant).click(function(e){
				e.preventDefault();
				if(!estamoviendo){
					if(primerElemento == 1){
						$container.css('left', cantidad * incremento * -1);
						primerElemento = cantidad;
					}
					else{
						primerElemento--;
					}
					estamoviendo = true;
					$container.animate({
						left: '+=' + incremento,
						}, 'swing', function(){
							estamoviendo = false;
						});
				}
			});
		});
	}
})(jQuery, window)
