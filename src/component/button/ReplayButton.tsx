import { memo } from "react";
import styled, { CSSObject } from "styled-components";
import colors,{fonts} from "../../asset/theme";

interface ReplayButtonProps {
  text: string;
  onClick: () => void;
  css?: CSSObject;
}

const ReplayButton = memo((props: ReplayButtonProps) => {
  return (
    <Container onClick={props.onClick} style={props.css!}>
      <svg
        width="18"
        height="19"
        viewBox="0 0 18 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.75 8.75012C15.5511 8.75012 15.3603 8.82914 15.2197 8.96979C15.079 9.11044 15 9.30121 15 9.50012C15.0089 10.9049 14.5277 12.2688 13.6392 13.357C12.7508 14.4451 11.5106 15.1894 10.1325 15.4616C8.7543 15.7338 7.32434 15.5169 6.08888 14.8482C4.85342 14.1795 3.8898 13.101 3.36399 11.7983C2.83818 10.4956 2.7831 9.05036 3.20822 7.71143C3.63334 6.3725 4.51206 5.22372 5.69303 4.46296C6.874 3.70219 8.2833 3.37706 9.6782 3.54356C11.0731 3.71005 12.3663 4.35776 13.335 5.37512H11.535C11.3361 5.37512 11.1453 5.45414 11.0047 5.59479C10.864 5.73544 10.785 5.92621 10.785 6.12512C10.785 6.32403 10.864 6.5148 11.0047 6.65545C11.1453 6.7961 11.3361 6.87512 11.535 6.87512H14.9325C15.1314 6.87512 15.3222 6.7961 15.4628 6.65545C15.6035 6.5148 15.6825 6.32403 15.6825 6.12512V2.75012C15.6825 2.55121 15.6035 2.36044 15.4628 2.21979C15.3222 2.07914 15.1314 2.00012 14.9325 2.00012C14.7336 2.00012 14.5428 2.07914 14.4022 2.21979C14.2615 2.36044 14.1825 2.55121 14.1825 2.75012V4.07762C12.9335 2.88367 11.3106 2.15759 9.58801 2.02212C7.86547 1.88665 6.14897 2.35011 4.72869 3.33414C3.30841 4.31817 2.27146 5.76243 1.79312 7.42276C1.31479 9.0831 1.42441 10.8577 2.10346 12.4465C2.78251 14.0354 3.98933 15.341 5.51992 16.1428C7.05052 16.9445 8.811 17.1932 10.5038 16.8467C12.1966 16.5003 13.7178 15.58 14.8104 14.2414C15.9029 12.9028 16.4998 11.228 16.5 9.50012C16.5 9.30121 16.421 9.11044 16.2803 8.96979C16.1397 8.82914 15.9489 8.75012 15.75 8.75012Z"
          fill="currentColor"
        />
      </svg>
      {props.text}
    </Container>
  );
});

export default ReplayButton;

const Container = styled.p`
  color: ${colors.black};
  font-size: ${fonts.m};
  cursor: pointer;
  display: flex;
  gap: 4px;
  align-items: center;
  margin-bottom: 0;
  svg {
    transition: 0.3s;
  }
  &:hover svg {
    transform: rotate(40deg);
  }
`;
