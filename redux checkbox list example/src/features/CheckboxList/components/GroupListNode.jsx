import React from 'react';

import { FlexBox, BasicImage, BasicSpan } from 'ui/atoms/Basics';
import { Box } from 'ui';

import Icon from './images/folder.svg';
import ArrowUp from './images/arrow-up.svg';
import ArrowDown from './images/arrow-down.svg';

export const GroupListNode = ({
    id,
    onToggle,
    title,
    isOpen,
    children,
}) => (
    <FlexBox
        key={id}
        onClick={() => onToggle({ id })}
        cursor="pointer"
        flexDirection="column"
    >
        <Box>
            <BasicImage src={Icon} />
            <BasicSpan>
                {title}
            </BasicSpan>
            <BasicImage
                src={isOpen ? ArrowUp : ArrowDown}
            />
        </Box>
        {isOpen && children}
    </FlexBox>
)