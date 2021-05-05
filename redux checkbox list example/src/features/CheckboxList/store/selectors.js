const { createSelector } = require("reselect");
import memoize from 'lodash.memoize';

const getCheckboxListItems = (state) => state?.checkboxlist?.items || [];
const getCheckboxListChecked = (state) => state?.checkboxlist?.checked || [];
const getCheckboxListOpened = (state) => state?.checkboxlist?.opened || [];

export const getCheckboxListContainerProps = createSelector(
    [
        getCheckboxListItems
    ],
    (items) => memoize(
        id => ({
            items: items.find(x => x.id == id)?.items?.map(x => ({
                ...x,
            })),
            parentId: id
        })
    )
);

export const getCheckboxListNodeContainerProps = createSelector(
    [
        getCheckboxListItems,
        getCheckboxListChecked,
    ],
    (items, checked) => memoize(
        (id, parentId) => ({
            ...items.find(x => x.id == parentId)?.items?.find(x => x.id == id),
            isChecked: checked.includes(id)
        })
    )
);

export const getGroupListContainerProps = createSelector(
    [
        getCheckboxListItems,
    ],
    (
        items,
    ) => ({
        items
    })
)

export const getGroupListNodeContainerProps = createSelector(
    [
        getCheckboxListItems,
        getCheckboxListOpened,
    ],
    (
        items,
        opened,
    ) => memoize(
        id => ({
            ...items.find(x => x.id == id) || {},
            isOpen: opened.includes(id),
        })
    )
)