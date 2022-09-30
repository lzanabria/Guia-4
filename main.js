addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let cant, trab, opc, tmp="", aum;
        cant=Number(prompt("Ingrese la cantidad de trabajadores: ",100));
        for(let i=1; i<=cant; i++){
            trab=prompt("Ingrese el nombre del trabajador #: "+i);
            opc=Number(prompt("Tiempos de servicio: \n    1. 1 - 5 años \n    2. 5 - 10 años \n    3. 10 - 20 años \n    4. 20 años o más \n\tSeleccione una opción: "));
            switch(opc){
                case 1:
                    tmp="1 - 5 años";
                    aum=100;
                    break;
                case 2:
                    tmp="5 - 10 años";
                    aum=250;
                    break;
                case 3:
                    tmp="10 - 20 años";
                    aum=400;
                    break;
                case 4:
                    tmp="20 años o más";
                    aum=550;
                    break;
                default:
                    alert("Opción incorrecta");
                    break;
            }
            alert("▶ Trabajador: "+trab+"\n\t Tiempo de servicio: "+tmp+"\n\t Aumento salarial: $"+aum);
        }
    }, 500);
});