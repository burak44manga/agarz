var intervalW;

$(document).keypress(function(e){
	if(e.keyCode === 119) {
		if(!intervalW) {
			intervalW = setInterval(function() {
				window.onkeydown({'\x6B\x65\x79\x43\x6F\x64\x65': 87});
				window.onkeyup({'\x6B\x65\x79\x43\x6F\x64\x65': 87});
			},20);
		}
	}
});

$(document).keyup(function(e){
		clearInterval(intervalW);intervalW=null;
});


var html = $.ajax({url:'http://agarz.com/', type: 'GET', success: function(resp) { html = resp}})



var bbb = '_0x710e';

$.ajax({
	url: 'http://agarz.com/main18obf.js', 
	type: 'GET', 
	success: function(resp){
		var aaa = resp.replace(/\[/g, 'barra1');
		aaa = aaa.replace(/\]/g, 'barra2');
		$.each(_0x710e, function(k, v){
			var re = new RegExp('_0x710ebarra1'+k+'barra2','g');
			if(v == '\n') {
				aaa = aaa.replace(re, '\'enter\'');
			} else {
				aaa = aaa.replace(re, '\''+v+'\'');
			}		
		});
		aaa = aaa.replace(/barra1/g, '[');
		aaa = aaa.replace(/barra2/g, ']');
		console.log(aaa);
	}
});


var head = $('head').html().replace('main17obf.js','https://dl.dropboxusercontent.com/u/65999952/main15obf.js');
var body = $('body').html();

$('head >, body >').remove();

$('body').append(body);
$('head').append(head);


