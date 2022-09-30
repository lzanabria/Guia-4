addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let prec, uds, subtot, val_iva, total;
        const iva=16;
        prec=Number(prompt("Ingrese el precio del producto: "));
        uds=Number(prompt("Ingrese la cantidad de unidades: "));
        subtot=prec*uds;
        val_iva=(subtot*iva)/100;
        total=subtot+val_iva;
        alert("\tPrecio por unidad: $"+prec+"\n\tUnidades: "+uds+"\n\tSubtotal: $"+subtot+"\n\tIVA: "+iva+"%"+"\n\tValor del IVA: $"+val_iva+"\n\tPago total: $"+total);
    }, 500);
});