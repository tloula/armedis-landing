import React from 'react';

interface SectionTitleProps {
    children: React.ReactElement;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
    return React.cloneElement(children, {
        className: children.props.className + " text-3xl sm:text-4xl lg:text-5xl lg:leading-[1.08] font-semibold tracking-[-0.045em]"
    });
};

export default SectionTitle;
