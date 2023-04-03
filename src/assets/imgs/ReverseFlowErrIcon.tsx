import React from "react";

export const ReverseFlowErrIcon = ({ color, ...rest }: any) => {
  return (
    <svg {...rest} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g  clipPath="url(#clip0)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 15C9.85652 15 11.637 14.2625 12.9497 12.9497C14.2625 11.637 15 9.85652 15 8C15 6.14348 14.2625 4.36301 12.9497 3.05025C11.637 1.7375 9.85652 1 8 1C6.14348 1 4.36301 1.7375 3.05025 3.05025C1.7375 4.36301 1 6.14348 1 8C1 9.85652 1.7375 11.637 3.05025 12.9497C4.36301 14.2625 6.14348 15 8 15ZM8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16Z"
          fill={color || "#EB5757"}
        />
        <path
          d="M7.64815 4.14383C7.84484 3.95003 8.16139 3.95237 8.35518 4.14907C8.54898 4.34576 8.54664 4.66231 8.34995 4.85611L5.66498 7.50166H12.5C12.7762 7.50166 13 7.7255 13 8.00163C13 8.27775 12.7762 8.5016 12.5 8.5016H5.66828L8.34995 11.1439C8.54664 11.3377 8.54898 11.6542 8.35518 11.8509C8.16139 12.0476 7.84484 12.05 7.64815 11.8562L4.18633 8.44518C3.93789 8.20039 3.93789 7.79961 4.18633 7.55482L7.64815 4.14383Z"
          fill={color || "#EB5757"}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};