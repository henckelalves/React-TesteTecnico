//CSS
import "./App.css";

//External
import { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";

//Local
import Header from "./components/Header";
import Post from "./components/Post";
import Comment from "./components/Comment";
import Footer from "./components/Footer";
import PostList from "./components/PostsList";
import Accordion from "./components/Accordion";

//Imgs
import logo from "./resources/Huawei-Logo.png";

//Variables
const companyTitle = "Henckel";
const websiteUrl = "www.testetecnico.com";
const postsSite = "http://jsonplaceholder.typicode.com/posts/";
const commentSite = "http://jsonplaceholder.typicode.com/comments/?postId=";

//App
function App() {
  const [postsData, setPost] = useState([]);
  const [actualPost, setActualPost] = useState(null);
  const [showPost, setShowPost] = useState(false);

  const [commentData, setComments] = useState([]);
  const [showComment, setShowComment] = useState(false);

  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(commentSite + `${actualPost}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setComments(result);
        },
        (error) => {
          setError(error);
        }
      );
  });

  useEffect(() => {
    fetch(postsSite)
      .then((res) => res.json())
      .then(
        (result) => {
          setPost(result);
        },
        (error) => {
          setError(error);
        }
      );
  }, []);

  function handleClick(a) {
    setActualPost(a);
    setShowPost(true);
  }

  return (
    <div>
      {/* Header */}
      <center>
        <Header urlBase={websiteUrl} logoSrc={logo} title={companyTitle} />
      </center>

      {/* Hidden Post */}
      <center>
        {showPost ? (
          <Fade bottom>
            <Post key={postsData[actualPost].id} {...postsData[actualPost]} />
            <Accordion title="Commments">
              <Comment comment={commentData}></Comment>
            </Accordion>
          </Fade>
        ) : null}
      </center>

      {/* Post List */}

      <center>
        <Accordion title="More Posts">
          <div className="accordion-content">
            {postsData.map((post) => (
              <div className="other-posts flex-1">
                <PostList
                  handle={() => handleClick(post.id)}
                  key={post.id}
                  {...post}
                />
              </div>
            ))}
          </div>
        </Accordion>
      </center>

      {/* Footer */}
      <center>
        <Footer logoSrc={logo} title={companyTitle} />
      </center>
    </div>
  );
}

export default App;
