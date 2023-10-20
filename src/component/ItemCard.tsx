import { memo } from "react";
import styled from "styled-components";
import colors from "../asset/theme";
import Col from "react-bootstrap/Col";

interface ItemCardProps {
  title: string;
  imgUrl: string;
}

const ItemCard = memo((props: ItemCardProps) => {
  return (
    <Col xs={12} sm={6} md={4}>
      <Container>
        <Img
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/img/${props.imgUrl})`,
          }}
        />
        <Title>{props.title}</Title>
      </Container>
    </Col>
  );
});

export default ItemCard;

const Container = styled.div`
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding-bottom: 20px;
  border-radius: 12px;
  border: solid 2px ${colors.blue};
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-bottom: 20px;
`;

const Img = styled.div`
  width: 100%;
  height: 210px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 0;
  height: 60px;
  text-align: center;
`;
