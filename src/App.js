//CSS
import "./App.css";

//Components
import Header from "./components/Header";
import Post from "./components/Post";
import Comment from "./components/Comment";
import Footer from "./components/Footer";

//Imgs
import logo from "./resources/Huawei-Logo.png";

//JSON
import newPost from "./posts.json";
//Variables
const companyTitle = "Henckel";
const websiteUrl = "www.testetecnico.com";

//App
function App() {
  return (
    <div>
      <center>
        <Header
          urlBase={websiteUrl}
          logoSrc={logo}
          title={companyTitle}
        ></Header>
      </center>

      <center>
        {newPost.map((posts) => (
          <Post {...posts}></Post>
        ))}
      </center>

      <center>
        <Comment></Comment>
      </center>

      <center>
        <Footer logoSrc={logo} title={companyTitle}></Footer>
      </center>
    </div>
  );
}

export default App;
