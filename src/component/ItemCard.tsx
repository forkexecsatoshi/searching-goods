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
    <Col sm={4}>
      <BorderContainer>
        <Container>
          <Img src={props.imgUrl} alt={props.title} />
          <Title>{props.title}</Title>
        </Container>
      </BorderContainer>
    </Col>
  );
});

export default ItemCard;

const BorderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 206px;
  height: 280px;
  background: ${colors.primary};
  border-radius: 12px;
`;

const Container = styled.div`
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding-bottom: 20px;
  border-radius: 12px;
  position: relative;
  width: 200px;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: 210px;
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 0;
`;
