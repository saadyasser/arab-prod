export const SearchIcon = (props: any) => {
  return (
    <svg
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d_600_1533)">
        <path
          d="M28.66 21.6141L23.7915 16.7464C23.5717 16.5267 23.2739 16.4046 22.9613 16.4046C22.638 16.4046 22.452 16.0286 22.6307 15.7591C23.6954 14.1531 24.314 12.2277 24.314 10.1553C24.314 4.54545 19.7678 0 14.157 0C8.54623 0 4 4.54545 4 10.1553C4 15.7651 8.54623 20.3105 14.157 20.3105C16.2299 20.3105 18.1557 19.692 19.762 18.6274C20.0315 18.4488 20.4074 18.6348 20.4074 18.9581C20.4074 19.2706 20.5295 19.5684 20.7493 19.7881L25.6178 24.6558C26.0768 25.1147 26.8191 25.1147 27.2732 24.6558L28.6551 23.2741C29.1141 22.8152 29.1141 22.073 28.66 21.6141ZM14.157 16.4046C10.7046 16.4046 7.90654 13.612 7.90654 10.1553C7.90654 6.70345 10.6997 3.90587 14.157 3.90587C17.6094 3.90587 20.4074 6.69856 20.4074 10.1553C20.4074 13.6071 17.6143 16.4046 14.157 16.4046Z"
          fill="#713488"
          fillOpacity="0.99"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_600_1533"
          x="0"
          y="0"
          width="33"
          height="33"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_600_1533"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_600_1533"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
export default SearchIcon;
