import React from 'react'

const Tag = (
  props,
) => {
  return (
    <>
      {props.showFlag ? (
          <div className="tag-container">
            開いている
          </div>
        ) : (
          <>
            閉じている
          </>
        )
      }
    </>
  );
};

export default Tag;
