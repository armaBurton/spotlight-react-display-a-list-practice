1. Goal: render 4 separate lists of things to the same app. Minimally,
  - one list should be a list of strings,
  - one should be a list of simple objects (with at least 3 properties),
  - one should be a list of objects where one property is a nested object,
  - and one should be a list of objects where one property is an array.
  - A a stretch goal, feel free to make all of them arrays of deep objects (with array and nested object properties).
2. Start with the list practice template repo (Links to an external site.).
3. Repeat the following process 4 times, with 4 different domains, all in the same template:
     1. Come up with a domain for this data (i.e. 'dogs' or 'candies'). Let's assume you picked 'candies'.
     2.  Rename array-one.js to candies-data.js or whatever. In that data file, create an array of at least 3 items for that domain. If they are objects, the objects in the array should all have the same properties.
  3. Rename ListOne.js to CandiesList.js to contain your CandiesList component.
  4. Rename ItemOne.js to CandyItem.js to contain your CandyItem component.
  5. Write a simple CandyItem({ candy }) component in CandyItem.js. It should take in a single candy item as a prop and render it out.
  6. Write a simple CandiesList({ candies }) component in CandiesList.js. It should take in an array of candies as a prop, but it won't do anything with that prop just yet. To start with, this component simply renders out <div>I am the CandiesList</div>, or something silly like that.
  7. In App.js, import CandiesList and the candies-data.js array. Render CandiesList in App.js.
  8. Pass the imported array down to CandiesList as a prop.
  9. In CandiesList import `CandyItem`.
  10. In CandiesList, map over the array you passed in as a prop from App.js. In your map, render a CandyItem for each item in the array. Don't forget to add a unique key for each item rendered!
  11. If your item has nested arrays, you'll need to map over and render that nested array in your CandyItem component.
  12. Note: do this process one array at a time. Do not write 4 arrays, then 4 List components, then 4 Item components, etc. Please work through the first array and its List and Item components before moving on to the second array.
