import React from 'react';

export const Writter = ({ children, Name, Photo, Position }) => (
  <div className="writter">
    {children}
    <div className="ilb">
      <a href={Photo}>
        <img alt={Name} className="" src={Photo} width="80" height="80" />
      </a>
    </div>
    <div className="ilb">
      <div className="">
        <p className="">Written by</p>
      </div>
      <div className="">
        <h2 className="">
          {Name}
        </h2>
        <div className="">
        </div>
      </div>
      <div className="">
        <h4 className="">{Position}</h4>
      </div>
    </div>
  </div>
);