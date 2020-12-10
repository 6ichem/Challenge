import React from "react";

export const useGridList = (params) => {
  const { ads, displayData, endOfData, loadMore } = params;
  const scrollingRef = React.useRef(null);

  // This useEffect hook will listen to scrolling event
  React.useEffect(() => {
    if (!scrollingRef.current) return;

    // You will notice I usually make extra constants, it's to make it easy to read for whoever will be reviewing this
    const element = scrollingRef.current;

    // Handle scroll function
    const handleScroll = () => {
      // If the user scroll to the end
      if (element.scrollTop + element.clientHeight >= element.scrollHeight) {
        loadMore();
      }
    };

    // Add event listener
    element.addEventListener("scroll", handleScroll);
    // Since event listeners don't get removed by it self, I need to manually remove it
    return () => element.removeEventListener("scroll", handleScroll);
  });

  return {
    models: { ads, displayData, endOfData },
    operators: { scrollingRef },
  };
};
