function reverseString(message){
	if (message == null || message.length == 0) {
		return;
	}
	return message.split('').reverse().join('');
}
