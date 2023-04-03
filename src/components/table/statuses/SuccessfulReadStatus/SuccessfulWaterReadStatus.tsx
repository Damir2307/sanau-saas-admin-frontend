import { FC } from "react";
import { HtmlTooltip } from "../../../uiKit/HtmlHoverTooltip";

export const SuccessfulWaterReadStatus: FC = () => {
  return (
    <HtmlTooltip
      placement="top-start"
      title={
        <div className="table-status-html__content">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 15C9.85652 15 11.637 14.2625 12.9497 12.9497C14.2625 11.637 15 9.85652 15 8C15 6.14348 14.2625 4.36301 12.9497 3.05025C11.637 1.7375 9.85652 1 8 1C6.14348 1 4.36301 1.7375 3.05025 3.05025C1.7375 4.36301 1 6.14348 1 8C1 9.85652 1.7375 11.637 3.05025 12.9497C4.36301 14.2625 6.14348 15 8 15ZM8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16Z"
                fill="#31B77E"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.9697 4.97028C11.1096 4.83155 11.2986 4.75348 11.4956 4.75293C11.6927 4.75239 11.882 4.82942 12.0228 4.96737C12.1635 5.10533 12.2442 5.29312 12.2476 5.49015C12.2509 5.68718 12.1766 5.87761 12.0407 6.02028L8.0487 11.0103C7.98009 11.0842 7.89728 11.1435 7.80523 11.1846C7.71318 11.2258 7.61377 11.248 7.51295 11.2499C7.41213 11.2517 7.31197 11.2332 7.21846 11.1955C7.12494 11.1578 7.04 11.1016 6.9687 11.0303L4.3237 8.38428C4.25001 8.31562 4.19091 8.23282 4.14992 8.14082C4.10893 8.04882 4.08688 7.94951 4.08511 7.8488C4.08333 7.7481 4.10186 7.64807 4.13958 7.55468C4.1773 7.46129 4.23344 7.37646 4.30466 7.30524C4.37588 7.23402 4.46071 7.17788 4.5541 7.14016C4.64749 7.10244 4.74752 7.08391 4.84822 7.08569C4.94893 7.08747 5.04824 7.10951 5.14024 7.1505C5.23224 7.19149 5.31504 7.25059 5.3837 7.32428L7.4777 9.41728L10.9507 4.99228C10.9569 4.98453 10.9636 4.97719 10.9707 4.97028H10.9697Z"
                fill="#31B77E"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span>Данные успешно считаны</span>
        </div>
      }
    >
      <svg
        className="table-status-html__icon"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 15C9.85652 15 11.637 14.2625 12.9497 12.9497C14.2625 11.637 15 9.85652 15 8C15 6.14348 14.2625 4.36301 12.9497 3.05025C11.637 1.7375 9.85652 1 8 1C6.14348 1 4.36301 1.7375 3.05025 3.05025C1.7375 4.36301 1 6.14348 1 8C1 9.85652 1.7375 11.637 3.05025 12.9497C4.36301 14.2625 6.14348 15 8 15ZM8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16Z"
            fill="#31B77E"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.9697 4.97028C11.1096 4.83155 11.2986 4.75348 11.4956 4.75293C11.6927 4.75239 11.882 4.82942 12.0228 4.96737C12.1635 5.10533 12.2442 5.29312 12.2476 5.49015C12.2509 5.68718 12.1766 5.87761 12.0407 6.02028L8.0487 11.0103C7.98009 11.0842 7.89728 11.1435 7.80523 11.1846C7.71318 11.2258 7.61377 11.248 7.51295 11.2499C7.41213 11.2517 7.31197 11.2332 7.21846 11.1955C7.12494 11.1578 7.04 11.1016 6.9687 11.0303L4.3237 8.38428C4.25001 8.31562 4.19091 8.23282 4.14992 8.14082C4.10893 8.04882 4.08688 7.94951 4.08511 7.8488C4.08333 7.7481 4.10186 7.64807 4.13958 7.55468C4.1773 7.46129 4.23344 7.37646 4.30466 7.30524C4.37588 7.23402 4.46071 7.17788 4.5541 7.14016C4.64749 7.10244 4.74752 7.08391 4.84822 7.08569C4.94893 7.08747 5.04824 7.10951 5.14024 7.1505C5.23224 7.19149 5.31504 7.25059 5.3837 7.32428L7.4777 9.41728L10.9507 4.99228C10.9569 4.98453 10.9636 4.97719 10.9707 4.97028H10.9697Z"
            fill="#31B77E"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </HtmlTooltip>
  );
};
