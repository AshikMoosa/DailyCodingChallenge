// Brute Force
function evenlyDivides(N) {
    let str = N.toString();
    let count = 0;
    for(let i=0;i<str.length;i++) {
        let num = Number(str[i]);
        if(N!==0) {
            if(N % num === 0) {
                count++;
            }
        }
    }
    console.log(count);
}

evenlyDivides(12)