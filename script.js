let cel = document.getElementById("cel")
let fah = document.getElementById("fah")
let kel = document.getElementById("kel")
cel.addEventListener('input', function () {
    let c = parseFloat(this.value);
    let f = (c * 9 / 5) + 32;
    let k = c + 273.15;
    if (!Number.isInteger(f)) {
        f = f.toFixed(2)
    }


    fah.value = f;
    kel.value = k;
})
fah.addEventListener('input', function () {
    let f = parseFloat(this.value);
    let c = (f - 32) * 5 / 9;
    let k = c + 273.15;
    if (!Number.isInteger(c)) {
        c = c.toFixed(2)
    }
    if (!Number.isInteger(k)) {
        k = k.toFixed(2)
    }

    kel.value = k;
    cel.value = c;
})
kel.addEventListener('input', function () {
    let k = parseFloat(this.value);
    let c = k - 273.15;

    if (!Number.isInteger(c)) {
        c = c.toFixed(2);
    }
    let f = c * 9 / 5 + 32;
    if (!Number.isInteger(f)) {
        f = f.toFixed(2);
    }
    fah.value = f;
    cel.value = c;
})