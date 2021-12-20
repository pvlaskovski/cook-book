function parseIngredients(ingredients, quantities){
    let finalIngredientsArray = [];

        for (let index = 0; index < ingredients.length; index++) {
            let ingredient = ingredients[index];
            let quantity = quantities[index];
            let obj = {
                ingredient,
                quantity
            }
            finalIngredientsArray.push(obj);
        }
    return finalIngredientsArray;
}

export default parseIngredients;