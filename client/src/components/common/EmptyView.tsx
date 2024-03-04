import React from 'react';
import { Link } from 'react-router-dom';

interface EmptyViewProps {
  icon: any;
  msg: string;
  link?: string;
  btnText?: string;
}

const EmptyView: React.FC<EmptyViewProps> = (props) => {
  const { icon, msg, link, btnText } = props;

  return (
    <>
      <div className="empty_view_wrapper">
        <div className="empty_view_icon">{icon}</div>
        <h2>{msg}</h2>
        {link && (
          <Link to={link} className="btn">
            {btnText}
          </Link>
        )}
      </div>
    </>
  );
};

export default EmptyView;
