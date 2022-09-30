addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let mens=0, total=0;
        for(let i=1; i<=20; i++) {
            if(i==1) {
                mens=10;
            }
            else {
                mens*=2;
            }
            alert("El pago del mes "+i+" es de: $"+mens);
            total+=mens;
        }
        alert("El pago total que pagó es de: $"+total);
    }, 500);
});