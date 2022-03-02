import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AlertBox, Header } from "../components";
import { EDITSHIPMENTNAME, GETSHIPMENTBYID } from "../query/shipments";
import {
  InputContainer,
  Loader,
  PageBody,
  ShipmentDetailsContainer
} from "../styles";


interface Params {
  id?: string;
}
type ShipmentData = {
  id: string;
  name: string;
  mode: string;
  origin: string;
  destination: string;
  userId: string;
  type: string;
  status: string;
  services: [];
  cargo: [];
};

const ShipmentDetailsScreen = () => {
  const [shipmentName, setShipmentName] = useState("");
  const [showForm, setShowForm] = useState<boolean>(false);
  const [shipment, setShipment] = useState<ShipmentData>({
    id: "",
    name: "",
    mode: "",
    origin: "",
    destination: "",
    userId: "",
    type: "",
    status: "",
    services: [],
    cargo: [],
  });

  const { id } = useParams<Params>();
  // const { push } = useHistory();

  const {
    data,
    loading,
    error,
    refetch,
  } = useQuery(GETSHIPMENTBYID, {
    variables: { id },
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    if (data !== undefined) {
      setShipment(data.shipment);
    } else {
      setShipment({
        id: "",
        name: "",
        mode: "",
        origin: "",
        destination: "",
        userId: "",
        type: "",
        status: "",
        services: [],
        cargo: [],
      });
    }
  }, [data]);

  console.log(data);
  console.log(id);

  const [
    updateName,
    { data: mutateData, loading: mutateLoading, error: mutateError },
  ] = useMutation(EDITSHIPMENTNAME, {
    refetchQueries: [GETSHIPMENTBYID],
  });

  console.log(mutateData);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setShipmentName(value);
  };

  const submit = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (shipmentName !== "") {
      updateName({
        variables: {
          id,
          name: {
            cargo: data.shipment.cargo,
            mode: data.shipment.mode,
            type: data.shipment.type,
            destination: data.shipment.destination,
            origin: data.shipment.origin,
            services: data.shipment.services,
            total: data.shipment.total,
            status: data.shipment.status,
            userId: data.shipment.userId,
            name: shipmentName,
          },
        },
      });
    }
  };

  // if (loading) {
  //   return <Loader />;
  // }

  // if (error) {
  //   throw new Error("There was an Error getting Shipment by id");
  // }

  const handleShowFormChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <Header goBack />
      <div className="mt-120">
        <PageBody>
          {loading ? <Loader /> : ""}
          <ShipmentDetailsContainer>
            <div className="content">
              <div className="left">
                <div className="content_row">
                  <p>Id: </p>
                  <p>{shipment.id}</p>
                </div>
                <div className="content_row">
                  <p>Name: </p>
                  <p>{shipment.name}</p>
                </div>
                <div className="content_row">
                  <p>Mode: </p>
                  <p>{shipment.mode}</p>
                </div>
                <div className="content_row">
                  <p>Shipped From: </p>
                  <p>{shipment.origin}</p>
                </div>
                <div className="content_row">
                  <p>User ID: </p>
                  <p>{shipment.userId}</p>
                </div>
              </div>
              <div className="right">
                <div className="content_row">
                  <p>Type: </p>
                  <p>{shipment.type}</p>
                </div>
                <div className="content_row">
                  <p>Status: </p>
                  <p>{shipment.status}</p>
                </div>
                <div className="content_row">
                  <p>Services: </p>
                  {shipment.services.map((service: any, index: any) => (
                    <div key={index} className="mr-20">
                      <p className="title">type: </p>
                      <p>{service.type}</p>
                      <p className="title">Value: </p>
                      <p>{service.value}</p>
                    </div>
                  ))}
                </div>
                <div className="content_row">
                  <p>Cargo: </p>
                  {shipment.cargo.map((cargoItem: any, index: any) => (
                    <div key={index} className="mr-20">
                      <p className="title">type: </p>
                      <p>{cargoItem.type}</p>
                      <p className="title">description: </p>
                      <p>{cargoItem.description}</p>
                      <p className="title">type: </p>
                      <p>{cargoItem.volumne}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <button onClick={handleShowFormChange}>
              {showForm ? "CANCEL" : "EDIT SHIPMENT NAME"}
            </button>
            <AlertBox
              success={mutateData ? "Shiment Name Updated Successfully" : null}
              error={mutateError ? "An Error Occurred During Shipment Name Update" : null}
            />
            {showForm ? (
              <>
                {loading ? <Loader /> : null}
                {mutateLoading ? <Loader /> : null}
                <InputContainer>
                  <div className="flex">
                    <label htmlFor="search_shipment">
                      <input
                        name="search_shipment"
                        value={shipmentName}
                        onChange={handleNameChange}
                        placeholder="Enter Name"
                      />
                    </label>
                    <button onClick={submit}>Update</button>
                  </div>
                </InputContainer>
              </>
            ) : null}
          </ShipmentDetailsContainer>
        </PageBody>
      </div>
    </div>
  );
};

export default ShipmentDetailsScreen;
