import { Route, Routes } from "react-router-dom";
import HomePage from "../views/HomePage";
import AboutPage from "../views/AboutPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/helloWorld" Component={() => <h1>Hello World</h1>} />
      <Route path="/aboutMe" Component={AboutPage} />
      <Route
        path="/Skill"
        Component={() => <h1>Under Development, Checkback later</h1>}
      />
      <Route
        path="/Contact"
        Component={() => <h1>Under Development, Checkback later</h1>}
      />
      <Route path="/blog" Component={() => <h1>Coming Soon</h1>} />
    </Routes>
  );
}

export default AppRoutes;
