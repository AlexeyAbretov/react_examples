import React from 'react';
import { connect } from "react-redux";
import faker from 'faker';

import { Initable } from "hocs";

import { CheckboxListNode } from "../components";

import { actions } from '../store/reducer';
import {
    getGroupListContainerProps,
    getGroupListNodeContainerProps,
    getCheckboxListContainerProps,
    getCheckboxListNodeContainerProps,
} from '../store/selectors';

import {
    GroupListNode,
} from '../components/GroupListNode';

const GroupListNodeContainer = connect(
    (state, ownProps) => ({
        ...getGroupListNodeContainerProps(state)(ownProps.parentId),
        ...ownProps,
    }),
    (dispatch) => ({
        onToggle: ({ id } = {}) => dispatch(actions.opened.set({ id })),
    })
)(GroupListNode);

const CheckboxListNodeContainer = connect(
    (state, ownProps) => getCheckboxListNodeContainerProps(state)(ownProps.id, ownProps.parentId),
    (dispatch) => ({
        onChecked: ({ id } = {}) => dispatch(actions.checked.set({ id })),
    })
)(CheckboxListNode);

const CheckboxListContainer = connect(
    (state, ownProps) => getCheckboxListContainerProps(state)(ownProps.parentId),
)(({ items, parentId }) => items.map(x => (
    <CheckboxListNodeContainer
        key={x.id}
        id={x.id}
        parentId={parentId}
    />
)));

export const GroupListContainer = connect(
    getGroupListContainerProps,
    (dispatch) => ({
        init: () => dispatch(actions.load({
            items: new Array(300)
                .fill({
                    id: 0,
                    title: '',
                    isOpen: false,
                    items: [],
                })
                .map(() => ({
                    id: faker.datatype.uuid(),
                    title: faker.name.title(),
                    isChecked: false,
                    items: new Array(10)
                        .fill({
                            id: 0,
                            title: '',
                            isChecked: false,
                        })
                        .map(() => ({
                            id: faker.datatype.uuid(),
                            title: faker.name.findName(),
                            isChecked: false,
                        }))
                }))
        }))
    })
)(Initable(({ items }) => items.map(x => (
    <React.Fragment key={x.id}>
        <GroupListNodeContainer parentId={x.id}>
            <CheckboxListContainer parentId={x.id} />
        </GroupListNodeContainer>
    </React.Fragment>
))));
