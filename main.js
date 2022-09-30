addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let est, cal, cal_acum=0, prom, mayor=0, menor=10;
        est=Number(prompt("Ingrese la cantidad de estudiantes: "));
        for(let i=1; i<=est; i++){
            cal=Number(prompt("Ingrese la calificación (1 - 10): "));
            cal_acum+=cal;
            if(cal>=mayor){
                mayor=cal;
            }
            if(cal<=menor){
                menor=cal;
            }
        }
        prom=cal_acum/est;
        alert("▶ Estudiantes encuestados: "+est+"\n\t Promedio de calificaciones: "+prom+"\n\t Calificación más alta: "+mayor+"\n\t Calificación más baja: "+menor);
    }, 500);
});