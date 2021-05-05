import { connect } from "react-redux";
import faker from 'faker';

import { Initable } from "hocs";

import { CheckboxList } from "../components";

import { actions } from '../store/reducer';
import { getCheckboxListContainerProps} from '../store/selectors';

export const CheckboxListContainer = connect(
    getCheckboxListContainerProps,
    (dispatch) => ({
        onChecked: ({ id } = {}) => dispatch(actions.checked.set({ id })),
        init: () => dispatch(actions.load({
            items: new Array(300)
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
)(Initable(CheckboxList));
