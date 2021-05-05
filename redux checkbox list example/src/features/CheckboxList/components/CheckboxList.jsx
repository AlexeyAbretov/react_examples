import React from 'react';

import { Box } from 'ui';
import { BasicCheckbox, BasicImage, BasicSpan } from 'ui/atoms/Basics';

import Icon from './images/briefcase.svg';

export const CheckboxList = ({ items = [], onChecked } = {}) => (
    <Box>
        {items?.map((x) => <Box key={x.id}>
            <BasicCheckbox
                onChange={() => onChecked({ id: x.id })}
                checked={x.isChecked}
            />
            <BasicImage src={Icon} />
            <BasicSpan>
                {x.title}
            </BasicSpan>
        </Box>)}
    </Box>
)