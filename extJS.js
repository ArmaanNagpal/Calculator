function buttn(n){
		document.getElementById('inpt').value+=n
	}
	function clrall(){
		document.getElementById('inpt').value=" "
	}
	function clr(){
		let text= document.getElementById('inpt').value
		document.getElementById('inpt').value=text.substring(0, text.length-1)
	}
	function equal(){
		var temp=document.getElementById('inpt').value;
		temp= temp.replace("x","*")
		var a=eval(temp);
		document.getElementById('inpt').value=a
	}