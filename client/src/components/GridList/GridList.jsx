import React from "react";
import gridList from "./GridList.module.css";
import gridItemStyles from "../GridItem/GridItem.module.css";
import { GridItem } from "../GridItem/GridItem";
import { Ad } from "../Ad/Ad";
import { useGridList } from "./GridList.logic";

export const GridList = (props) => {
  const {
    models: { ads, displayData, endOfData },
    operators: { scrollingRef },
  } = useGridList(props);
  return (
    <div
      className={`${gridList.gridContainer} ${gridList.scrollable}`}
      ref={scrollingRef}>
      {displayData.map((item, index) =>
        // This will prevent index mod 0 = 0 when index = 0
        index !== 0 && index % 20 === 0 ? (
          <React.Fragment key={index}>
            {/* I render the ads from the array */}
            <Ad src={`http://localhost:3000/ads?r=${ads[index / 20 - 1]}`} />
            <GridItem item={item} />
          </React.Fragment>
        ) : (
          <GridItem item={item} key={item.id} />
        )
      )}
      {/* if end of data  */}
      {endOfData && (
        <div className={`${gridItemStyles.item} ${gridList.gridFullWidth}`}>
          ~ end of catalogue ~
        </div>
      )}
    </div>
  );
};
