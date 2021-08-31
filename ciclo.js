class Factorial {
  factorial(numero) {
    let suma = 1;

    for(let i = 1; i <= numero; i++) {
      suma *= i;
    }
    return suma;
  }

  calcularFactorial(numero) {
    let suma = 0;

    if(1 < numero) {
      for(let i = 1; i <= numero; i++) {
        suma += (1/this.factorial(i));
      }
    } else {
      return false;
    }
    return suma;
  }

  calcularSerieInfinita(numero) {
        let suma = 4;

        for(let i = 3; i <= numero; i+=2) {
          suma = suma - 4/(i) + 4/(i+2);
        }
        return suma;
    }
}