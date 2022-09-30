addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let a=0, b=1;
        alert("1")
        for(let i=1; i<=11; i++) {
            a=b+4;
            b=a-2;
            alert(a);
            alert(b);
        }
    }, 500);
});