import { gql } from "@apollo/client";

// GET ALL SHIPMENTS WITH()
export const GETALLSHIPMENTS = gql`
  query getAllShipments(
    $sortingOrder: STR
    $sortBy: STR
    $total: INT
    $pageNumber: INT
  ) {
    shipments(
      _page: $pageNumber
      _limit: $total
      _sort: $sortBy
      _order: $sortingOrder
    ) @rest(type: "Shipments", path: "/shipments?{args}") {
      id
      destination
      name
      origin
      status
      userId
    }
  }
`;

export const SEARCHSHIPMENTSBYSEARCHID = gql`
  query getShipmentsById($id: STR) {
    shipment(id: $id) @rest(type: "ShipmentByID", path: "/shipments?{args}") {
      id
      name
      destination
      origin
      mode
    }
  }
`;

export const GETSHIPMENTBYID = gql`
  query getShipmentById($id: STR) {
    shipment(id: $id) @rest(type: "Shipment", path: "/shipments/{args.id}") {
      id
      name
      cargo
      mode
      type
      destination
      origin
      services
      total
      status
      userId
    }
  }
`;

export const EDITSHIPMENTNAME = gql`
  mutation editShipmentName($shipmentName: STR, $id: STR) {
    shipment(name: $shipmentName, id: $id)
      @rest(
        type: "Name"
        path: "/shipments?{args}"
        method: "PUT"
        bodyKey: "shipmentName"
      ) {
      id
      shipmentName
    }
  }
`;
