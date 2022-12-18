import { Dispatch, FC, SetStateAction } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

interface PaginationProps {
  amount: number;
  perPage: number;
  paginate: Dispatch<SetStateAction<number>>;
  currentPage: number;
  className?: string;
  currentPageClassName?: string;
}

const Pagination: FC<PaginationProps> = ({
  amount,
  perPage,
  className,
  paginate,
  currentPage,
  currentPageClassName,
}) => {
  const pagesAmount = Math.ceil(amount / perPage);
  const pageNumbers = [];

  for (let i = 1; i <= pagesAmount; i++) {
    pageNumbers.push(i);
  }

  const handlePrev = (): void => {
    paginate(currentPage === 1 ? 1 : --currentPage);
  };

  const hadnleNext = (): void => {
    paginate(currentPage === pagesAmount ? pagesAmount : ++currentPage);
  };

  return (
    <div className={className ?? ""}>
      <button onClick={handlePrev}>
        <BsArrowLeftShort size={28} />
      </button>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              className={currentPage === number ? currentPageClassName ?? "" : ""}
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
      <button onClick={hadnleNext}>
        <BsArrowRightShort size={28} />
      </button>
    </div>
  );
};

export default Pagination;
