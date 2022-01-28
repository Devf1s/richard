$(function() {
	$('.postscript-slider').slick({
	    dots:true,
	  	arrows:false
	});
});

const parent = document.querySelector('.advertisement');
const child = parent.querySelector('.container');

if (document.body.clientWidth < 768){
   child.classList.remove('container');
}