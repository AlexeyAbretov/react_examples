import React from 'react';
import { connect } from "react-redux";
import faker from 'faker';

import { CheckboxList } from "../components";

import { actions } from '../store/reducer';
import { getCheckboxListContainerProps} from '../store/selectors';
import { useEffect } from "react";

export const CheckboxListContainer = connect(
    getCheckboxListContainerProps,
    (dispatch) => ({
        onChecked: ({ id } = {}) => dispatch(actions.checked.set({ id })),
        init: () => dispatch(actions.load({
            items: new Array(3000)
                .fill({
                    id: 0,
                    title: '',
                })
                .map(() => ({
                    id: faker.datatype.uuid(),
                    title: faker.name.title(),
                }))
        }))
    })
)(({ init, ...props }) => {
    useEffect(() => {
        init();
    }, []);

    return <CheckboxList {...props} />
});
