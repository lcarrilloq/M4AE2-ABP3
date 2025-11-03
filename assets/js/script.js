// ===== PROBLEMA 1: Número de la suerte =====
function luckyNum(n) {
  let result;
  if (n <= 1 || n > 100) {
    result = "El número está fuera del rango válido (2-100)";
  } else if ((n > 5 && n < 15) || n === 70 || n === 55) {
    result = "El número ingresado tiene opciones de ganar";
  } else {
    result = "El número ingresado no es favorable";
  }
  return result;
}

document.getElementById('checkLuckyBtn').addEventListener('click', () => {
  const input = document.getElementById('luckyNumber').value;
  const resultDiv = document.getElementById('result1');

  if (input === '') {
    resultDiv.textContent = 'Por favor, ingrese un número.';
    resultDiv.className = 'result error';
    return;
  }

  const num = Number(input);
  const message = luckyNum(num);
  
  if (message.includes('fuera del rango') || message.includes('no es favorable')) {
    resultDiv.className = 'result error';
  } else {
    resultDiv.className = 'result success';
  }
  resultDiv.textContent = message;
});

// ===== PROBLEMA 2: Año bisiesto =====
function isLeapYear(n) {
  let result;
  if (n < 0) {
    result = "Debes ingresar un número mayor o igual a 0";
  } else if ((n % 4 === 0 && n % 100 !== 0) || n % 400 === 0) {
    result = "Es año bisiesto";
  } else {
    result = "Es año normal";
  }
  return result;
}

document.getElementById('checkLeapBtn').addEventListener('click', () => {
  const input = document.getElementById('yearInput').value;
  const resultDiv = document.getElementById('result2');

  if (input === '') {
    resultDiv.textContent = 'Por favor, ingrese un año.';
    resultDiv.className = 'result error';
    return;
  }

  const year = Number(input);
  const message = isLeapYear(year);

  if (message === "Es año bisiesto") {
    resultDiv.className = 'result success';
  } else if (message === "Es año normal") {
    resultDiv.className = 'result info';
  } else {
    resultDiv.className = 'result error';
  }
  resultDiv.textContent = message;
});

// ===== PROBLEMA 3: Set de tenis =====
const checkSet = (m, n) => {
  const isValid =
    m >= 0 &&
    n >= 0 &&
    m <= 7 &&
    n <= 7 &&
    !(m > 6 && n < m - 1) &&
    !(n > 6 && m < n - 1) &&
    !(m === 7 && n === 7);

  if (!isValid) {
    return `Resultado inválido.`;
  }

  if ((m >= 6 && n <= m - 2) || (m === 7 && n === 6)) {
    return `Jugador A ha ganado el set.`;
  }

  if ((n >= 6 && m <= n - 2) || (n === 7 && m === 6)) {
    return `Jugador B ha ganado el set.`;
  }

  return `El set aún no termina.`;
};

document.getElementById('checkSetBtn').addEventListener('click', () => {
  const a = document.getElementById('scoreA').value;
  const b = document.getElementById('scoreB').value;
  const resultDiv = document.getElementById('result3');

  if (a === '' || b === '') {
    resultDiv.textContent = 'Por favor, complete ambos puntajes.';
    resultDiv.className = 'result error';
    return;
  }

  const scoreA = Number(a);
  const scoreB = Number(b);
  const message = checkSet(scoreA, scoreB);

  if (message.includes('ganado')) {
    resultDiv.className = 'result success';
  } else if (message.includes('inválido')) {
    resultDiv.className = 'result error';
  } else {
    resultDiv.className = 'result info';
  }
  resultDiv.textContent = message;
});