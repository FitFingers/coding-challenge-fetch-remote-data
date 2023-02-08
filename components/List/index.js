import { useCallback, useEffect, useMemo, useState } from "react";
import Grid from "../Grid";
import Form from "../Form";

const styles = {
  containerStyle: {
    display: "flex",
    flexDirection: "column",
  },
};

// ===================================================
// COMPONENTS
// ===================================================

const List = ({ url }) => {
  const [remoteData, setRemoteData] = useState([]);
  const [localData, setLocalData] = useState([]);

  useEffect(() => {
    async function fetchRemoteData() {
      try {
        if (!url) throw new Error("No URL provided");
        const response = await fetch(url);
        const result = await response.json();
        setRemoteData(result);
      } catch (error) {
        console.debug("Caught error", { error });
        alert(`Error fetching data: ${error.message}`);
      }
    }
    fetchRemoteData();
  }, [url]);

  const addLocalData = useCallback(
    (newItem) => {
      const newLocalData = [...localData, newItem];
      setLocalData(newLocalData);
    },
    [localData]
  );

  const allData = useMemo(
    () => [...remoteData, ...localData],
    [remoteData, localData]
  );

  return (
    <div style={styles.containerStyle}>
      <Grid items={allData} />
      <Form addLocalData={addLocalData} />
    </div>
  );
};

export default List;
