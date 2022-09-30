addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let n_vent, venta, cant_ventC1=0, cant_ventC2=0, cant_ventC3=0, monto_c1=0, monto_c2=0, monto_c3=0, monto_global=0;
        n_vent=Number(prompt("Ingrese el número de ventas realizadas en el día: "));
        for(let i=1; i<=n_vent; i++){
            venta=Number(prompt("Ingrese el monto de la venta "+i+": "));
            if(venta>1000){
                cant_ventC1++;
                monto_c1+=venta;
            }
            else if(venta>500){
                cant_ventC2++;
                monto_c2+=venta;
            }
            else if (venta<=500){
                cant_ventC3++;
                monto_c3+=venta;
            }
            monto_global+=venta;
        }
        alert("▶ Monto global: $"+monto_global+"\n\n▶ N° ventas mayores a $1000: "+cant_ventC1+"\n     \tMonto: $"+monto_c1+"\n▶ N° ventas mayores a $500 y menores a $1000: "+cant_ventC2+"\n     \tMonto: $"+monto_c2+"\n▶ N° ventas menores a $500: "+cant_ventC3+"\n     \tMonto: $"+monto_c3);
    }, 500);
});