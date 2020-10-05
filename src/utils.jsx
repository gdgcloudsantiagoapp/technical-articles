import React from 'react';

export const Writter = ({ children, Name, Photo, Position }) => (
  <div class="writter">

    <div class="ilb">
      <a href={Photo}>
        <img alt={Name} class="" src={Photo} width="80" height="80" />
      </a>
    </div>


    <div class="ilb">
      <div class="">
        <p class="">Written by</p>
      </div>
      <div class="">
        <h2 class="">
          {Name}
        </h2>
        <div class="">
        </div>
      </div>
      <div class="">
        <h4 class="">{Position}</h4>
      </div>
    </div>
  </div>
);