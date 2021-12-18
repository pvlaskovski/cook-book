function parseIngredients(arr){
    let finalIngredientsArray = [];

        for (let index = 0; index < arr.length - 1; index+=2) {
            let ingredient = arr[index];
            let quantity = arr[index+1];
            let obj = {
                ingredient,
                quantity
            }
            finalIngredientsArray.push(obj);
        }
    return finalIngredientsArray;
}

export default parseIngredients;