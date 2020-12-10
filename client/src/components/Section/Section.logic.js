import React from "react";
import Axios from "axios";

export const useSection = () => {
  const [displayData, setDisplayData] = React.useState([]);
  const [batchedData, setBatchedData] = React.useState([]);
  const [sortType, setSortType] = React.useState("id");
  const [loading, setLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [endOfData, setEndOfData] = React.useState(false);
  const [ads, setAds] = React.useState([]);

  // This function will be called whenever sortType is changed
  const fetchingData = async () => {
    console.log("fetching data");
    try {
      // Loading should popup when loading the data
      setLoading(true);
      // Request url
      const requestUrl = `http://localhost:3000/api/products?_page=1&_limit=${
        20 * page
      }&_sort=${sortType}`;

      // I used async await to get the clear loading state
      const response = await Axios.get(requestUrl);

      // Destructuring
      const fetchedData = response.data;

      setDisplayData(fetchedData);
      // Since the requirement need batched data, I need to request batch data to improve the user experience
      await fetchingBatchData();
      setLoading(false);
    } catch (error) {
      // If the server is error
      throw new Error("cannot fetch the data");
    }
  };

  // This function is much similar to fetchingData
  const fetchingBatchData = async () => {
    console.log("fetching batch data");
    try {
      // it's to prevent failure/wrong data to be added to displayData
      setBatchedData([]);
      setLoading(true);
      // request Url
      const requestUrl = `http://localhost:3000/api/products?_page=${
        page + 1
      }&_limit=20&_sort=${sortType}`;

      const response = await Axios.get(requestUrl);

      const fetchedData = response.data;
      // This will happen when there's no data to fetch anymore
      if (fetchedData.length === 0) {
        setLoading(false);
        return setEndOfData(true);
      }

      setBatchedData(fetchedData);
      setLoading(false);
    } catch (error) {
      throw new Error("cannot fetch the data");
    }
  };
  // This function will be called whenever user scroll to the bottom of grid
  const loadMore = () => {
    // This will prevent the user from abusing scroll and it will also prevent fetching data when there's no more data to fetch
    if (loading || endOfData) {
      return;
    }
    // Increasing the page for batched data
    setPage(page + 1);
    // Set the new Display Data
    setDisplayData([...displayData, ...batchedData]);
  };
  // This function will randomize data
  const reRoll = () => Math.floor(Math.random() * 1000);

  // This function will get new ad and prevent 2 ad in a row
  const getNewAd = () => {
    let newAd = reRoll();
    if (ads.length === 0) {
      return setAds([...ads, newAd]);
    }

    const prevAd = ads[ads.length - 1];

    // This will make sure that no ad will display twice in a row
    if (newAd % 10 === prevAd % 10) {
      console.log("?");
      newAd += 3;
    }
    // Setting new ads using ES6
    setAds([...ads, newAd]);
  };

  React.useEffect(() => {
    // This will fetch data whenever sortType state changes
    fetchingData();
  }, [sortType]);

  React.useEffect(() => {
    // This will prevent fetching batch data 2 times
    if (page === 1) return;
    fetchingBatchData();
    // Since I render 20 item per request, I can call new ad in here
    getNewAd();
  }, [page]);

  return {
    models: { sortType, ads, displayData, endOfData, loading },
    operators: { loadMore, setSortType },
  };
};
