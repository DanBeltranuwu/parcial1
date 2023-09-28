import Card from "react-bootstrap/Card";

function Part(props) {
  return (
    <Card style={{ width: "18rem", height: "24rem" }} className="mb-3">
      <Card.Img
        style={{ height: "14rem" }}
        variant="top"
        src={props.car.image}
        alt={props.car.descripcion}
      />
      <Card.Body>
        <Card.Title>{props.car.partName}</Card.Title>
        <Card.Text>{props.car.carMaker}</Card.Text>
        <Card.Text>
          {props.car.price + " - " + props.car.carYear}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Part;
