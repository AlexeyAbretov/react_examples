import React from 'react';

import { Box } from 'ui';
import { BasicCheckbox, BasicImage, BasicSpan } from 'ui/atoms/Basics';

import Icon from './images/user.svg';

export const CheckboxListNode = ({ id, isChecked, title, onChecked } = {}) => (
    <Box
        onClick={(e) => {
            e.stopPropagation();
        }}
    >
        <BasicCheckbox
            onChange={() => {
                onChecked({ id })
            }}
            checked={isChecked}
        />
        <BasicImage src={Icon} />
        <BasicSpan>
            {title}
        </BasicSpan>
    </Box>
)