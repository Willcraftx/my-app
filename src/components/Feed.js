import clockIcon from "../images/clock.svg";
import emptyFolderIcon from "../images/empty-folder.svg";
import userIcon from "../images/user.svg";

import "../styles/Feed.css";

export default function Feed(props) {
  
  if (props.posts.length === 0) {
    return (
      <div className="feed-status">
        <img src={emptyFolderIcon} alt  ="Empty folder" />

        <h1>Nao encontramos nada</h1>
        <h2>
          Parece que voce e seus amigos nao postaram nada.Comece a escrever uma
          nova historia!
        </h2>
      </div>
    );
  }

  return (
    <>
      <header>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
      </header>

      <section className="feed">
        {props.posts.map((post) => (
          <article key={post.id}>
            <p>{post.content}</p>

            <footer>
              <div className="user-details">
                <img src={userIcon} alt="User" />
                <strong>{post.userName}</strong>
              </div>

              <div className="time">
                <img src={clockIcon} alt="Clock" />
                <span>
                  Publicado em {post.publishedAt.toLocaleDateString("pt-br")}
                </span>
              </div>
            </footer>
          </article>
        ))}
      </section>
    </>
  );
}
