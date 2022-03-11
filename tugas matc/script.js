function getElement(elementName) {
	var x = document.getElementById(elementName);
	return x;
}

function buttonTambah() {
	// 65.00 2.1 4.2
	var text1 = parseFloat(getElement('bil1').value);
	var text2 = parseFloat(getElement('bil2').value);
	if (!text1 || !text2) { 
		alert('Input tidak boleh kosong!'); 
		return false;
	}

	getElement('hasil').value = text1 + text2;
}