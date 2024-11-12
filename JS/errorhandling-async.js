async function hello() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log("hey response", response);
    const data = await response.json();
    console.log("data is", data);
    console.log("The end");
  } catch (error) {
    console.log("error handling hello", error);
  }
}

hello();
