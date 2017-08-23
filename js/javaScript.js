//currency convertor
	function convert(param1){
	    var factor;
	    f = document.getElementById('from').value
	    t = document.getElementById('to').value

	    if(f == t){
	        factor = 1
	    }
	    else if(f == 'EUR' && t == 'USD'){
	        factor = 1.06;
	    }
	    else if(f == 'USD' && t == 'EUR'){
	        factor = 1/1.06;
	    }
	    else if(f == 'RSD' && t == 'EUR'){
	        factor = 1/120.60;
	    }
	    else if(f == 'EUR' && t == 'RSD'){
	        factor = 1*120.60;
	    }
	    else if(f == 'RSD' && t == 'USD'){
	        factor = 1/101.50;
	    }
	    else if(f == 'USD' && t == 'RSD'){
	        factor = 1/101.50;
	    }

	    if(param1 == "C"){
	        document.getElementById('secondinput').value = document.getElementById('firstinput').value * factor
	    }
	    if(param1 == "F"){
	        document.getElementById('firstinput').value = document.getElementById('secondinput').value * factor
	    }

	}
	//reset button
	function myFunction() {
	    document.getElementById("convertor").reset();
		}
	//number validation
	$(document).ready(function () {
		$("#firstinput").keypress(function (e) {
	   	if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
	    $("#errmsg").html("Number Only").show();
	        return false;
	    }
	   });
	});
	$(document).ready(function () {
		$("#secondinput").keypress(function (e) {
	   	if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
	    $("#errmsg").html("Number Only").show();
	        return false;
	    }
	   });
	});