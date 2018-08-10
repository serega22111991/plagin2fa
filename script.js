
var tel = "";
function enterTelName() {
	tel = prompt("Enter phone number","");
	
	if (tel) {		
		sendSMS();
	} else {
	alert('Incorect phone number. Try again.');
	enterTelName();
	}
	
}

function sendSMS() {
	alert('We have send sms to your phone');
	
	$.ajax({
		url: "sendSMS.php",  //название базы куда скидывать 
		type: "POST",         // метод передачи
		data: ({tel:tel}),  //name - название получаемой переменной в файле PHP, admin - название переменной с JS
		dataType: "html",       // тип передаваемых данных
		success: funcSuccess  // функци¤, что покажет, что-то после срабатывани¤ а¤кса 
		});
	
}

function funcSuccess() {
	var code = prompt("enter code from your phone","");
	
}