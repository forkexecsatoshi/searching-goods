import { memo } from "react";
import styled from "styled-components";
import colors, { fonts, media } from "../asset/theme";
import Col from "react-bootstrap/Col";

interface ItemCardProps {
  title: string;
  imgUrl: string;
  url: string;
}

const ItemCard = memo((props: ItemCardProps) => {
  return (
    <ColWrapper xs={12} md={6} lg={4}>
      <Container target="_blank" href={props.url}>
        <Img
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/img/${props.imgUrl})`,
          }}
        />
        <Title>{props.title}</Title>
      </Container>
    </ColWrapper>
  );
});

export default ItemCard;

const ColWrapper = styled(Col)`
  margin-bottom: 12px;
`;

const Container = styled.a`
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 10px;
  gap: 8px;
  border-radius: 12px;
  border: solid 2px ${colors.blue};
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-bottom: 20px;
  cursor: pointer;
  color: ${colors.black};
  text-decoration: none;
  transition: 0.2s;
  height: 100%;
  &:hover {
    transform: scale(1.05);
  }
`;

const Img = styled.div`
  width: 100%;
  height: 210px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #d5e4ff;
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 0;
  min-height: 60px;
  padding: 0 4px;
  @media (max-width: ${media.sp}) {
    font-size: ${fonts.m};
  }
`;
