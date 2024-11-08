import React, { Suspense } from "react";

import "./App.css";

const Profile = React.lazy(() => import("./Component/Profile.jsx"));

function App() {
  return (
    <>
      <h1>Welcome</h1>
      <Suspense fallback={<div>Loading.....</div>}>
        <Profile />
      </Suspense>
    </>
  );
}

export default App;
