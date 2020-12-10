// Notice that I used CSS module for faster development
// To use CSS module, add module before .css like I did and use it like an object

import React from "react";
import { Loading } from "../Loading/Loading";
import sectionStyles from "./Section.module.css";
import { GridList } from "../GridList/GridList";
import { useSection } from "./Section.logic";

export const Section = () => {
  const {
    models: { ads, displayData, endOfData, loading, sortType },
    operators: { loadMore, setSortType },
  } = useSection();

  // I separate renderType for cleaner render code
  const renderType = (name, value) => {
    return (
      <div
        className={`${sectionStyles.typeWrapper} ${
          sortType === value && sectionStyles.activeTypeWrapper
        }`}
        onClick={() => setSortType(value)}>
        {name}
      </div>
    );
  };

  return (
    <section className={sectionStyles.products}>
      <div className={sectionStyles.sortContainer}>
        <span className={sectionStyles.sortTitle}>
          Please select your sort type:
        </span>
        {renderType("Id", "id")}
        {renderType("Size", "size")}
        {renderType("Price", "price")}
      </div>

      <GridList
        ads={ads}
        displayData={displayData}
        endOfData={endOfData}
        loadMore={loadMore}
      />
      {/* If loading */}
      {loading && <Loading />}
    </section>
  );
};
