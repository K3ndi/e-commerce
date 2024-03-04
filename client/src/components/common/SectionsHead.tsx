import React from 'react';

interface SectionsHeadProps {
  heading: string;
}

const SectionsHead: React.FC<SectionsHeadProps> = (props) => {
  return (
    <>
      <div className="section_head">
        <h2 className="heading">{props.heading}</h2>
      </div>
    </>
  );
};

export default SectionsHead;
