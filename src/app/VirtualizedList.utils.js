const getStyles = (props) => {
  const bodyHeight = props.itemHeight * props.items.length;
  return {
    wrapper: {
      height: Math.min(props.height, bodyHeight) + "px",
      width: "100%",
      overflowY: "auto",
      overflowX: "hidden",
      position: "relative",
      border: "1px solid black"
    },
    body: {
      height: bodyHeight + "px"
    },
    item: (idx) => ({
      border: "1px solid gray",
      position: "absolute",
      width: "100%",
      top: idx * props.itemHeight + "px",
      height: props.itemHeight + "px"
    })
  };
};

module.exports = { getStyles };
