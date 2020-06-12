function palindrome(message){
	if (message == null || message.length == 0) {
		return;
	}
	if (message.length == 1) {
		return true;
	}
	var reverse = message.split('').reverse().join('');
	var result = message == reverse ? true : false;
	return result;
}