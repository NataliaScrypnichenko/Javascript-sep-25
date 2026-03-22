//– взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути списком під час відображення.

const divRecipes = document.getElementById('divRecipes');

fetch('https://dummyjson.com/recipes')
.then(res => res.json())
.then(recipesObject => {
    let{recipes} = recipesObject;
    console.log(recipes);
    let recipe = recipes[0];
    for (const recipe of recipes) {
        let divInfo = document.createElement('div');
        divInfo.classList.add('item-recipe');
        divInfo.innerText=`
           id: ${recipe.id},
           name: ${recipe.name},
           prepTimeMinutes: ${recipe.prepTimeMinutes},
           cookTimeMinutes:${recipe.cookTimeMinutes},
           servings: ${recipe.servings},
           difficulty: ${recipe.difficulty},
           cuisine: ${recipe.cuisine},
           caloriesPerServing: ${recipe.caloriesPerServing},
           tags:${recipe.tags},
           userId: ${recipe.userId},
           rating: ${recipe.rating},
           reviewCount: ${recipe.reviewCount},
           mealType:${recipe.mealType}
        `

        let pInstructions = document.createElement('p');
        pInstructions.innerText=`${recipe.instructions}`

        let ol = document.createElement('ol');
        ol.innerHTML='ingredients'
        for (const ingredient of recipe.ingredients) {
             let li = document.createElement('li');
            li.innerText=` ${ingredient} `

           ol.append( li)

        };


        let img = document.createElement('img');
        img.src = recipe.image;


        divRecipes.appendChild(divInfo);
        divInfo.append(pInstructions, ol, img);
    };
})

// instructions: ${recipe.instructions},
