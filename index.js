while (1) {
    var n = Math.random()
    if(n>.99999999) {
        console.log(n);
        postMessage(n)
        break
    }
}