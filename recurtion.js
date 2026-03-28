function recurtion(n) {
    if (n === 50) {
        console.log(n);
        return;
    }
    console.log(n)
    recurtion(n+2)
}
recurtion(10);