async function hello1() {
  let value = 0;
  try {
    const getPromise = await new Promise((resolve, reject) => {
      if (value > 5) {
        resolve("Done");
      } else {
        reject("Not Done");
      }
    });
    console.log("getPromise is-->", getPromise);
  } catch (error) {
    console.log("Error happened", error);
  }
}

hello1();
