import Part from "./Part";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const { useEffect, useState } = require("react");

function Inventory() {
  const [inventory, setInventory] = useState([]);
  useEffect(() => {
    const URL =
      "https://raw.githubusercontent.com/DanBeltranuwu/parcial1/master/datos.json";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        setInventory(data);
      });
  }, []);

  return (
    <div className="container">
      <Row>
        {inventory.map((element) => (
          <Col key={element.id}>
            <Link to={"/inventory/"+element.carModel}>
              <Part car={element} />
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Inventory;
