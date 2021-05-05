const { createSelector } = require("reselect");

const getCheckboxListItems = (state) => state?.checkboxlist?.items || [];
const getCheckboxListChecked = (state) => state?.checkboxlist?.checked || [];

export const getCheckboxListContainerProps = createSelector(
    [
        getCheckboxListItems,
        getCheckboxListChecked
    ],
    (
        items,
        checked,
    ) => ({
        items: items.map((x) => ({
            ...x,
            isChecked: checked.includes(x.id),
        }))
    })
)