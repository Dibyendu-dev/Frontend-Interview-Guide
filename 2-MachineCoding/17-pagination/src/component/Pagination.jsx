const Pagination = ({ pageNo, setPageNo }) => {
  const prevThreeArr = Array.from(
    { length: 3 },
    (_, index) => pageNo - 1 - index
  )
    .filter((value) => value > 0)
    .reverse();

  const nextThreeArr = Array.from({ length: 3 }, (_, index) => pageNo + index);

  const paginationArr = [...prevThreeArr, ...nextThreeArr];

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  const handlePrev = () => {
    setPageNo(pageNo - 1);
  };
  return (
    <div className="pagination-container">
      {pageNo > 1 ? (
        <div onClick={handlePrev} className="page-btn">
          {"<"}
        </div>
      ) : (
        ""
      )}
      {paginationArr.map((val) => {
        return <div onClick={()=>setPageNo(val)} className={val === pageNo ? `page-btn active` : `page-btn`}>{val}</div>;
      })}

      <div onClick={handleNext} className="page-btn">
        {">"}
      </div>
    </div>
  );
};

export default Pagination;
