var iniciar = document.getElementById("sign");
iniciar.addEventListener("click", function(){
	var pass = document.getElementById("pass").value;
	var user = document.getElementById("user").value;

	if(user == "" || user.length == 0 || /^\s+$/.test(user)){
		document.getElementById("user").classList.add("error");
		document.getElementById("user").value = "";
	} if(pass == "" || pass.length == 0 || /^\s+$/.test(pass) || pass == 123456 || pass.length < 6){
		document.getElementById("pass").classList.add("error");
		document.getElementById("pass").value = "";
	}
	else{
		var nuevo = document.getElementById("new");
		nuevo.setAttribute("href", "galeria.html"); //Abriendo nueva pagina
	}
	
});