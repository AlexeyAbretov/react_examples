import React from 'react';

import { Box } from 'ui';
import { BasicCheckbox, BasicImage, BasicSpan } from 'ui/atoms/Basics';

import Icon from './images/briefcase.svg';

const Row = React.memo(({ id, isChecked, title, onChecked }) => <Box width="400px">
    <BasicCheckbox
        onChange={() => onChecked({ id })}
        checked={isChecked}
    />
    <BasicImage src={Icon} />
    <BasicSpan>
        {title}
    </BasicSpan>
</Box>);

export const CheckboxList = ({ items = [], onChecked } = {}) => (
    <>
        {items?.map((x) => <Row
            key={x.id}
            id={x.id}
            title={x.title}
            isChecked={x.isChecked}
            onChecked={onChecked}
        />)}
    </>
)