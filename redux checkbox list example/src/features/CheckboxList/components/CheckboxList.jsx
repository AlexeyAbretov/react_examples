import React from 'react';

import { Box } from 'ui';
import { BasicCheckbox, BasicSpan } from 'ui/atoms/Basics';

export const CheckboxList = ({ items = [], onChecked } = {}) => (
    <Box>
        {items?.map((x) => <Box key={x.id}>
            <BasicCheckbox
                onChange={() => onChecked({ id: x.id })}
                checked={x.isChecked}
            />
            <BasicSpan>
                {x.title}
            </BasicSpan>
        </Box>)}
    </Box>
)