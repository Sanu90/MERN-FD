async function fetchUsers() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
 // console.log("Resp is", resp);

//   const users = await resp.json();
const users = await resp.stringify()
  console.log("users is", users);

  //const name = users.map((val)=>)

//   const names = users.map(({ name }) => name);
//   console.log(names);
}

fetchUsers();
