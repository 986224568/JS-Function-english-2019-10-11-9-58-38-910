function countWords(message){
	if (message == null || message.length == 0) {
		return message;
	}
	var arr = message.split(" ");
	return arr.length;
}