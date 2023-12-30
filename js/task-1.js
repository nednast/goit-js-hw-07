const list = document.querySelector("#categories");
const listItems = list.querySelectorAll(".item");
console.log(`Number of categories: ${listItems.length}`);

listItems.forEach((el) => {
  let title = el.querySelector("h2").textContent;
  let content = el.querySelectorAll("li").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${content}`);
});
