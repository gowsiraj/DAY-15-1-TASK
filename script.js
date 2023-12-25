var calculatorDiv = document.createElement('div');
        calculatorDiv.id = 'calculator';
        document.body.appendChild(calculatorDiv);

        
        var inputElement = document.createElement('input');
        inputElement.type = 'text';
        inputElement.id = 'display';
        inputElement.disabled = true;
        calculatorDiv.appendChild(inputElement);

  
        var button1 = createButton('1');
        var button2 = createButton('2');
        var button3 = createButton('3');
        var buttonAdd = createButton('+', 'operator');
        var button4 = createButton('4');
        var button5 = createButton('5');
        var button6 = createButton('6');
        var buttonSubtract = createButton('-', 'operator');
        var button7 = createButton('7');
        var button8 = createButton('8');
        var button9 = createButton('9');
        var buttonMultiply = createButton('*', 'operator');
        var button0 = createButton('0');
        var buttonClear = createButton('C', 'clear');
        var buttonEquals = createButton('=', 'equal');
        var buttonDivide = createButton('/', 'operator');

        // Append buttons to the calculator div
        calculatorDiv.appendChild(button1);
        calculatorDiv.appendChild(button2);
        calculatorDiv.appendChild(button3);
        calculatorDiv.appendChild(buttonAdd);
        calculatorDiv.appendChild(button4);
        calculatorDiv.appendChild(button5);
        calculatorDiv.appendChild(button6);
        calculatorDiv.appendChild(buttonSubtract);
        calculatorDiv.appendChild(button7);
        calculatorDiv.appendChild(button8);
        calculatorDiv.appendChild(button9);
        calculatorDiv.appendChild(buttonMultiply);
        calculatorDiv.appendChild(button0);
        calculatorDiv.appendChild(buttonClear);
        calculatorDiv.appendChild(buttonEquals);
        calculatorDiv.appendChild(buttonDivide);

        
        function buttonClick(value) {
            var display = document.getElementById('display');

            
            if (value === 'C') {
                display.value = '';
            } else if (value === '=') {
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = 'Error';
                }
            } else {
                display.value += value;
            }
        }

       
        function createButton(text, optionalClass) {
            var button = document.createElement('button');
            button.textContent = text;
            button.setAttribute('type', 'button');

            if (optionalClass) {
                button.classList.add(optionalClass);
            }

            button.onclick = function () {
                buttonClick(text);
            };

            return button;
        }