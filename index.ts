function main(): void {
  const projectName = "support.ai";
  const welcome_response: string = welcome(projectName);
  console.log(welcome_response);
}

function welcome(name: string) {
  return "Hello, " + name.toLowerCase();
}

main();
