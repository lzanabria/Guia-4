addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let cant, nums, suma=0, resta=0, multi=1, divi=1;
        cant=Number(prompt("Ingrese la cantidad de números: "));
        for(let i=1; i<=cant; i++){
            nums=Number(prompt("Ingrese el valor del número "+(i)+": "));
            suma+=nums;
            resta-=nums;
            multi*=nums;
            divi/=nums;
        }
        alert("\t Suma: "+suma+"\n\t Resta: "+resta+"\n\t Multiplicación: "+multi+"\n\t División: "+divi);
    }, 500);
});