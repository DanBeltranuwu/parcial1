import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
const { useEffect, useState } = require("react");

function rowDetail(title, value) {
  return (
    <Row>
      <h4>{title}</h4>
      <h4>{value}</h4>
    </Row>
  );
}

export default function Detail() {
  const params = useParams();
  const [part, setPart] = useState([]);
  useEffect(() => {
    const URL =
      "https://raw.githubusercontent.com/DanBeltranuwu/parcial1/master/datos.json";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        var found = false;
        for (let index = 0; index < data.length && !found; index++) {
          const element = data[index];
          if (element.carModel === params.partId) {
            setPart(element);
            found = true;
          }
        }
      });
  }, [params.partId]);

  return (
    <div>
      <Row>
        <img src={part.image} alt={part.description} />
        <Col>
          <h1>{part.partName}</h1>
          <hr />
          {rowDetail("Car Maker", part.carMaker)}
          {rowDetail("Car Model", part.carModel)}
          {rowDetail("Car Year", part.carYear)}
          {rowDetail("Available Online", part.available)}
          {rowDetail("Price", part.price)}
          <h4>Description</h4>
          <h4>{part.description}</h4>
        </Col>
      </Row>
    </div>
  );
}
