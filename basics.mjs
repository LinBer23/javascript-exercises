/**
 * Schreibe je eine Funtion add, substract, multiply, divide, die die
 * jeweilige Grundrechenart auf die beiden übergebenen Parameter A und B
 * anwendet. Verwende Arrow-Funktionen.
 */
// export const ...
// ...
// ...
// ...
export const add = (a, b) => {
    return a + b;
};
export const substract = (a, b) => {
    return a - b;
};
export const multiply = (a, b) => {
    return a * b;
};
export const divide = (a, b) => {
    return a / b;
};

/**
 * Schreibe eine Funktion, die eine Temeratur in Celsius in eine Temperatur in
 * Fahrenheit umrechnet.
 * 
 * @param {*} celsius 
 */
export function inFahrenheit (celsius) {

    // ...
}

/**
 * Schreibe eine Funktion, die eine Temeratur in Fahrenheit in eine Temperatur
 * in Celsius umrechnet.
 * 
 * @param {*} celsius 
 */
export const inCelsius = (fahrenheit) => {

    // ...
}

/**
 * Schreibe eine Funktion, die prüft, ob eine Zahl gerade ist.
 */
export const isEven = () => undefined // TODO

/**
 * Schreibe eine Funktion, die prüft, ob eine Zahl ungerade ist.
 */
export const isOdd = () => undefined // TODO

// Kontrollfluss

// if

/**
 * Schreibe eine Funktion, die die Umsatzsteuer anhand des Umsatzes und des
 * Steuerjahres berechnet. Der Steuersatz beträgt 19%. Liegt der Umsatz unter
 * der Freigrenze von 17.500 EUR (für die Steuerjahre 2003-2019) bzw. 22.000 EUR
 * (für die Steuerjahre ab 2020) soll die Kleinunternehmerregelung angewendet
 * und keine Umsatzsteuer berechnet werden. Der Rückgabewert ist dann 0.
 *
 * @param {*} umsatz
 * @param {*} steuerjahr
 * @returns
 */
export function umsatzsteuer(umsatz, steuerjahr = 2024) {
    // ...

  
}

// switch

/**
 * Schreibe eine Funktion, die den Flächeninhalt verschiedener geometrischer
 * Formen berechnet. Die Funktion soll zwei Argumente erhalten:
 * Den Namen der geometrischen Form (circle, triangle, rectangle), sowie die
 * dafür relevanten Parameter als ein Objekt.
 * Für die Berechnung eines Kreises wird der Radius (radius) benötigt.
 * Für die Berechnung eines Dreieckes sowie eines Rechteckes werden die Länge
 * der Grundseite (base) sowie die Höhe (height) benötigt.
 * 
 * @param {*} shape 
 * @param {*} params 
 * @returns 
 */
let a = { b: 5 };
export const area = (shape, params) => {
    // ...

    let result = 0;
    switch (shape) {
        case "circle":
            result = params.radius * Math.PI;
            break;
        case "triangle":
            result = (params.height * params.base) / 2;
            break;
        case "rectangle":
            result = params.base * params.height;
            break;
    }
    return result;
};

// loops

/**
 * Schreibe eine Funktion, die alle Karten eines Kartenspiels jeweils mit ihrer
 * Farbe (Clubs, Spades, Hearts, Diamonds) und ihrem Wert (2 - 10, J, K, Q, A)
 * erzeugt.
 * Die Karten werden als Array bestehend aus Farbe und Wert dargestellt und alle
 * Karten in einem Array gesammelt zurückgegeben.
 *
 * @returns
 */
export function deckOfCards() {
    // ...
    
}

/**
 * Schreibe eine Funktion, die die ersten N Antworten für das FizzBuzz-Spiel
 * erzeugt und auf der Konsole ausgibt.
 *
 * @param {*} n
 * @see https://de.wikipedia.org/wiki/Fizz_buzz
 */
export function fizzbuzz(n) {
    // ...
    for (let i = 1; i < n; i++) {
        if (i % 15) {
            if (i % 3) {
                if (i % 5) {
                    console.log(i);
                } else {
                    console.log("buzz");
                }
            } else {
                console.log("fizz");
            }
        } else {
            console.log("fizz buzz");
        }
    }
}
console.log(fizzbuzz(100));
// recursion

/**
 * Schreibe eine rekursive Funktion, die die N-te Fibonacci-Zahl berechnet.
 * 
 * @param {*} n 
 * @returns n-th Fibonacci number
 * @see https://de.wikipedia.org/wiki/Fibonacci-Folge
 */
export function fibonacci(n) {
    // ...

    if (n < 2) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
