// tests/math.test.js

function sumar(a, b) {
    return a + b;
  }
  
  test('sumar 1 + 2 debe ser 3', () => {
    expect(sumar(1, 2)).toBe(3);
  });
  