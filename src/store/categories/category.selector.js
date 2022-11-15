import { createSelector } from "reselect";


const selectCategoryReducer = (state) => state.categories;

// In this case, we ahve a memoized selector. It will only run again, if the parameters
// ever change.
export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
)

// Here, the state.categories.categoeries will return an array.
// It is important to transform all the data into the final format before
// Send it to the reducer.
export const selectCategoriesMap = createSelector(
    // As long as the categories (parameters) are the same, it wont re-run
    [selectCategories],
    (categories) => categories.reduce((acc, category) => {
        // Here, we go through each document in the 'categories' object.
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        // Updating the accumulator for each case = items itself.
        return acc;
}, {})
);

export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.isLoading
);
