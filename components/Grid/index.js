import Card from "@/components/Card";

const styles = {
  gridStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    width: "100%",
    height: "100%",
    minHeight: "500px",
    padding: "20px",
    boxSizing: "border-box",
    backgroundColor: "#0003",
  },
};

// ===================================================
// COMPONENTS
// ===================================================

const Grid = ({ items = [] }) => {
  return (
    <div id="grid" style={styles.gridStyle}>
      {items.map((item) => {
        return <Card key={item.id || item.postId} {...item} />;
      })}
    </div>
  );
};

export default Grid;
