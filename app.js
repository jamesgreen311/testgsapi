function testGS() {
    const url = "https://script.google.com/macros/s/AKfycbw7LsL3ASCbX82jmKa0K1_P66Lz8mBTqh5LLJbpxktF4GR4shm8qBLYig/exec";
    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status;
        });    
}

document.getElementById("btn").addEventListener("click", testGS)