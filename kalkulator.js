const number1 = document.querySelector('.number1');
const number2 = document.querySelector('.number2');
const result = document.querySelector('.result');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
	button.addEventListener('click', e => {
		if (button.classList.contains('operator')) {
			const op = button.value;
			const n1 = parseFloat(number1.value);
			const n2 = parseFloat(number2.value);

			if (isNaN(n1) || isNaN(n2)) {
				result.value = 'Error';
			} else {
				switch (op) {
					case '+':
						result.value = n1 + n2;
						break;
					case '-':
						result.value = n1 - n2;
						break;
					case '*':
						result.value = n1 * n2;
						break;
					case '/':
						result.value = n1 / n2;
						break;
				}
			}
		}

		if (button.classList.contains('clear')) {
			number1.value = '';
			number2.value = '';
			result.value = '';
		}
	});
});
