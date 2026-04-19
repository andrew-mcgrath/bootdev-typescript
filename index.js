function main() {
    const projectName = "support.ai";
    const welcome_response = welcome(projectName);
    console.log(welcome_response);
}
function welcome(name) {
    return "Hello, " + name.toLowerCase();
}
main();
export {};
