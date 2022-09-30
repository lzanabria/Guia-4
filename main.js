addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let ang_rad, conv, sen;
        ang_rad=Number(prompt("Ingrese el valor del ángulo en radianes: "));
        conv=(ang_rad*180)/Math.PI;
        sen=Math.sin(ang_rad);
        alert("▶ Ángulo: "+ang_rad+" radianes. \n\t Coversión a grados: "+conv+"\n\t El seno del ángulo es: "+sen);
    }, 500);
});