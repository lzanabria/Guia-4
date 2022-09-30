addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let n;
        n=Number(prompt("Ingrese el número de la tabla de multiplicar: "));
        for (let i=1; i<=10; i++) {
            console.log(n+" x "+i+" = "+(n*i));
            alert("Tabla del "+n+"\n"+n+" x "+i+" = "+n*i);
        }
    }, 500);
});