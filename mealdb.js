const loadMeals = (search) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then((response) => response.json())
    .then((data) => displayMeals(data.meals));
};

const displayMeals = (meals) => {
  const mealsContainer = document.getElementById('meals-container');
  mealsContainer.innerHTML = ``;
  meals.forEach((meal) => {
    console.log(meal);
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('col');
    mealDiv.innerHTML = `
     <div onclick="loadMealDetail(${
       meal.idMeal
     })" class="card" style="width: 18rem">
              <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">
                  ${meal.strInstructions.slice(0, 200)}
                </p>
                <a href="${
                  meal.strYoutube
                }" class="btn btn-primary" target="_blank">Go somewhere</a>
              </div>
            </div>
    `;
    mealsContainer.appendChild(mealDiv);
  });
};

const searchFood = () => {
  const inputField = document.getElementById('search-field');
  const inputValue = inputField.value;
  loadMeals(inputValue);
  inputField.value = '';
};

const loadMealDetail = (idMeal) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    .then((response) => response.json())
    .then((data) => displayMealDetail(data.meals[0]));
};

const displayMealDetail = (meal) => {
  const mealDetailDiv = document.getElementById('meal-detail-div');
  mealDetailDiv.innerHTML = ``;
  const mealDiv = document.createElement('div');
  mealDiv.classList.add('col');
  mealDiv.innerHTML = `
  <div class="card" style="width: 18rem">
              <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">
                  ${meal.strInstructions.slice(0, 200)}
                </p>
                <a href="${
                  meal.strYoutube
                }" class="btn btn-primary" target="_blank">Go somewhere</a>
              </div>
            </div>
  `;
  mealDetailDiv.appendChild(mealDiv);
};

loadMeals('');
