import Link from "next/link";

const styles = {
  cardStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    flex: "1 1 33%",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
    padding: "20px",
    margin: "20px",
    boxSizing: "border-box",
  },
};

// ===================================================
// COMPONENTS
// ===================================================

const Card = ({ id, postId, name, email, body }) => {
  return (
    <div style={styles.cardStyle}>
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{body}</p>
      <Link href="/posts/[postId]" as={`/posts/${postId}`}>
        View Post - {id}
      </Link>
    </div>
  );
};

export default Card;
