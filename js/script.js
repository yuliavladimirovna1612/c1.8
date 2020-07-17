function jQuery (selector, context = document){
	this.elements = Array.from(context.querySelectorAll(selector));
	return this
}
jQuery.prototype.each = function (fn){
	this.elements.forEach((element, index) => fn.call(element, element, index));
	return this;
}

jQuery.prototype.click = function(fn){
	this.each(element => element.addEventListener('click', fn))
	return this
}

jQuery.prototype.text = function(txt){

    this.each(element => element.textContent = txt)
  	return this;
    
} 


jQuery.prototype.html = function(){

	document.getElementById("head_h1").innerHTML = ''
 
}

const $ = (e) => new jQuery(e);


$("#button2").click(e => console.log(e)).text('New text')
$("#button1").click(e => console.log(e)).html()