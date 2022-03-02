import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ShipmentContainer } from "../../styles";

interface Props {
  shipments: {
    id: string;
    destination: string;
    name: string;
    origin: string;
    userId: string;
    status: string;
  }[];
}

type ShipmentData = {
  id: string;
  destination: string;
  name: string;
  origin: string;
  userId: string;
  status: string;
}[];

const Shipment = ({ shipments }: Props) => {
  const { push } = useHistory();

  const [data, setData] = useState<ShipmentData>([
    {
      id: "",
      destination: "",
      name: "",
      origin: "",
      userId: "",
      status: "",
    },
  ]);

  useEffect(() => {
    if (shipments !== undefined) {
      setData(shipments);
    } else {
      setData([
        {
          id: "",
          destination: "",
          name: "",
          origin: "",
          userId: "",
          status: "",
        },
      ]);
    }
  }, [shipments]);

  return (
    <ShipmentContainer>
      <table>
        <thead>
          <tr>
            <th className="column">id</th>
            <th className="column">name</th>
            <th className="column">User ID</th>
            <th className="column">destination</th>
            <th className="column">origin</th>
            <th className="column">status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((shipment, index) => (
            <tr
              key={index}
              onClick={() => push(`/shipment-details/${shipment.id}`)}
            >
              <td className="column">{shipment.id}</td>
              <td className="column">{shipment.name}</td>
              <td className="column">{shipment.userId}</td>
              <td className="column">{shipment.destination}</td>
              <td className="column">{shipment.origin}</td>
              <td className="column">{shipment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </ShipmentContainer>
  );
};

export default Shipment;
