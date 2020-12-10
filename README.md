### Coding challenge for a frontend developer position

You must run both the server and the react app (client folder) at the same time. The server must be running at localhost with port 3000 for the react app to make the proper requests or you can change the port from the logic files where I make the requests. (modules: npm install - server: npm run start - client: npm run dev)

### INTRO

1. You can see I have separated the component into 3 files, .jsx, .logic, .module.css

- .jsx files will only be rendering the UI. basically the HTML.
- .logic.js will be the logic. I start at useBlahBlah since it's basically a custom hook. I also return it ormatted as:
  { models: {}, operators: {} }
  This will help trace things easier which is the state, and which is the method.
- .module.css will do the styling.

2. You will see I don't export default, this is because export default will need to read all the file, and export will only read what it's exported. And it's easier to find aswell instead of manually defining it on the top.

### FEATURES

1. I created a header component first and re-wrote it based on index.html file in public folder

2. I created GridItem, it's a box with the emoticon, id, etc...

3. I created Ad third, it's just an img tag with custom styles.

4. I created Section last since it combines all of the components, and did the logic inside it.

### Requirement Feature

1. Products are displayed in a grid. => Grid Item and Grid List

2. Give the user an option to sort the products in ascending order. Can sort by "size", "price" or "id". The products list should be reloaded when a new sorting option is chosen. => In Section component, There's a renderType and sortedType state.

3. A "size" field, which is the font-size (in pixels). We should display the faces in their correct size, to give customers a realistic impression of what they're buying. => Grid Item, I've put fontSize with the real size in it.

4. A "price" field, in cents. This should be formatted as dollars like $3.51. => On centToDollars, the documentation is here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString

5. A "date" field, which is the date the product was added to the catalog. Dates should be displayed in relative time (eg. "3 days ago") unless they are older than 1 week, in which case the full date should be displayed. => relative Time.js will calculate the relative time in hours ago, days ago and dd/mm/yyyy format.

6. The product grid should automatically load more items as you scroll down. => Grid List, I implemented a useEffect hook that will detect whenever user scrolls to the bottom.

7. Display an animated "loading..." message while the user waits for the data to load. => Loading, I used a library called typed.

8. To improve the user's experience, we should always pre-emptively fetch the next batch of results in advance, making use of idle-time. But they still should not be displayed until the user has scrolled to the bottom of the product grid. => fetchingBatchData in Section.logic.js, it will load the next 20 item when it's called.

9. When the user reaches the end and there are no more products to display, show the message "~ end of catalogue ~". => GridList

10. After every 20 products we need to insert an advertisement from one of our sponsors. Use the same markup as the advertisement in the header shown in public/index/html, but make sure the ?r query param is randomly generated each time an ad is displayed. => Gridlist, I added a logic like index % 20 === 0 to detect if the item is 20 or not.

11. Ads should be randomly selected, but a user must never see the same ad twice in a row. => Section.logic.js, the getNewAd() function. first it will generate a random number and it will compare it with the previous ad. If the new ad is same with prevAd then +3 so that it never happens again.
