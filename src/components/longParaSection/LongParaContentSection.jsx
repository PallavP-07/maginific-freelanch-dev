import React from 'react'

const LongParaContent = ({ details }) => {
  
    return (
      <>
        <div className="text-center lg:py-28 md:py-14 md:px-10 py-7 px-5 lg:px-40 flex flex-col gap-5">
          <div
            className="content-container"
            dangerouslySetInnerHTML={{ __html: details }}
          />
        </div>
      </>
    );
  };

  export default LongParaContent;