import { FC, useState } from "react";
import { Popover } from "react-tiny-popover";

type PropsType = {
  qtyOfCorrectData: number;
  qtyOfInvalidData: number;
  qtyOfUnreadData: number;
  date: string;
  onClick?: (e: React.MouseEvent) => void;
};

export const NoData: FC<PropsType> = ({ qtyOfCorrectData, qtyOfInvalidData, qtyOfUnreadData, date, onClick }) => {
  const [isPopoverOpen, togglePopoverOpen] = useState(false);

  return (
    <Popover
      isOpen={isPopoverOpen}
      padding={0}
      containerClassName="table-status__container"
      positions={["top", "left"]}
      onClickOutside={() => {
        togglePopoverOpen(false);
      }}
      content={
        <div className="item100-data-box__popover">
          <div className="item100-data-box__title">{date}</div>
          <div className="item100-data-box__item  d-flex justify-content-between align-items-center">
            <span>Корректные данные</span>
            <span>{qtyOfCorrectData}</span>
          </div>
          <div className="item100-data-box__item d-flex justify-content-between align-items-center">
            <span>Некорректные данные</span>
            <span>{qtyOfInvalidData}</span>
          </div>
          <div className="item100-data-box__item d-flex justify-content-between align-items-center">
            <span>Не считалось</span>
            <span>{qtyOfUnreadData}</span>
          </div>
        </div>
      }
    >
      <div
        onMouseEnter={() => {
          togglePopoverOpen(true);
        }}
        onMouseLeave={() => {
          togglePopoverOpen(false);
        }}
        className="no-data-box d-flex justify-content-center align-items-center"
        onClick={(e) => onClick && onClick(e)}
      >
        <span>{date.split("-").length > 2 ? date.split("-")[2] : "Нет даты"}</span>
      </div>
    </Popover>
  );
};