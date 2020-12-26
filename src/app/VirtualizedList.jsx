import React from "react";
import { getStyles } from "./VirtualizedList.utils";

const List = (props) => {
  const [currentScroll, setCurrentScroll] = React.useState(0);
  const styles = getStyles(props);
  const onScroll = (evt) => setCurrentScroll(evt.target.scrollTop);

  const items = [];
  let drawnHeight = 0;
  for (let i = 0; i < props.items.length; i++) {
    const itemTop = i * props.itemHeight;
    if (itemTop + props.itemHeight < currentScroll) continue;
    if (drawnHeight > props.height) break;
    drawnHeight += props.itemHeight;
    items.push(
      <div style={styles.item(i)} key={i}>
        {props.items[i][props.dataKey]}
      </div>
    );
  }

  return (
    <div style={styles.wrapper} onScroll={onScroll}>
      <div style={styles.body}>{items}</div>
    </div>
  );
};

module.exports = List;
