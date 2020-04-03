
const apart = document.getElementById("apart");

renderList = categories => {
  return `
    <div id="output">
        <h5 id="apart" >${categories.strCategory}</h5>
        <p id="linkers" >${categories.strCategoryThumb}</p>           
    </div>
    `;
};

clearFood = () => {
  apart.innerHTML = "";
};

const loadData = async query => {
  clearFood()
  try {
    const result = axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");

    const { data: categories } = await result;
    

    for (let i = 0; i < categories.length; i++) {
      if (query == undefined || query == categories.categories[i].strCategory)
        apart.innerHTML += renderList(categories.categories[i]);
    }console.log(categories);
  } catch (err) {
    p.innerHTML = `Couldn't reach the API.`;
    console.log("getApartments: ERROR", err);
  }
};
loadData();
