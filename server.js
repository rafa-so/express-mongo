import http from "http";

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Curso de node json")
});

server.listen(3000, () => {
    console.log("Servidor escutando!")
});