function captcha(){
	  var capItem = ['56AbE456', '792hg53AB', '84AHB7n', '24GhBcG8', 'lJGne53', 'jg45AGNc'];
	  for(i = 0; i < 3; i++){
	    var a = capItem[Math.floor(Math.random() * capItem.length)];
	  }
	  var code = a ;
	  document.getElementById("captc").value = code
	  console.log(code);
	}

	function userCap(){
		var captc = document.getElementById("captc").value;
		var userCaptc = document.getElementById("user").value;
		if(captc === userCaptc){
			//return true;
			document.getElementById('rightcap').innerHTML = '<img src="gif/gifcongrats.gif">'
		}else{
			//return false;
			document.getElementById('rightcap').innerHTML = '<img src="gif/giffailed.gif">'
		}
	}

	//captcha();
	//console.log(validCaptcha());