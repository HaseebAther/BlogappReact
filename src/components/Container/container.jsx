const container = ({children}) => {

  return (
    <>
      <div className="w-full max-w-7xl px-2 mx-auto
      ">
        <div>{children}</div>
      </div>
    </>
  );
};

export default container; 