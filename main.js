addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let n, result1=0, result2=0;
        n=Number(prompt("Ingrese un número positivo: "));
        if (n>0) {
            for(let i=1; i<=n; i++){
                result1+=i**2;
                result2+=i**i;
            }
            alert("\tEl resultado de la serie 1 es: "+result1+"\n\tEl resultado de la serie 2 es: "+result2);
        }
        else {
            alert("El número ingresado no es positivo");
        }
    }, 500);
});