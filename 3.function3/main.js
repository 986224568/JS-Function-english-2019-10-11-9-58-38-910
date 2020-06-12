function alphabetSort(message){
	if (message == null || message.length <= 1) {
		return message;
	}
	var arr = [];
	for (let k = 0; k <= message.length - 1; k++) {
		arr.push(message.charAt(k));
	}
	for (let i = message.length - 1; i > 0; i--) {
		for (let j = 0; j < i; j++) {
			if (arr[j] > arr[i]) {
				let temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr.join().replace(/,/g, "");
}