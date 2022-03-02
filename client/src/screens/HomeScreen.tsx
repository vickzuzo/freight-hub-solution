import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import {
  AlertBox,
  Header,
  Hero,
  Paginator,
  SearchShipmentBar,
  Select,
  Shipment,
} from "../components";
import { GETALLSHIPMENTS, SEARCHSHIPMENTSBYSEARCHID } from "../query/shipments";
import {
  Loader,
  PageBody,
  SelectContainer,
  ShipmentSearchContainer,
  SortSelectContainer,
} from "../styles";

type ShipmentData = {
  id: string;
  destination: string;
  name: string;
  origin: string;
  userId: string;
  status: string;
};

const HomeScreen = () => {
  const [searchId, setSearchId] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("id");
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [sortingOrder, setSortingOrder] = useState<string>("asc");
  const [shipments, setShipments] = useState<ShipmentData[]>([
    {
      id: "",
      name: "",
      origin: "",
      destination: "",
      userId: "",
      status: "",
    },
  ]);

  const { data, loading, error, refetch } = useQuery(GETALLSHIPMENTS, {
    variables: { sortingOrder, sortBy, total: 20, pageNumber },
  });

  useEffect(() => {
    if (data !== undefined) {
      setShipments(data.shipments);
    } else {
      setShipments([
        {
          id: "",
          name: "",
          origin: "",
          destination: "",
          userId: "",
          status: "",
        },
      ]);
    }
  }, [data]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    // push to redux
    setShipments(data?.shipments);
  }, [data]);

  const getSeachId = (searchId: string) => {
    setSearchId(searchId);
  };

  const {
    data: searchData,
    loading: searchLoading,
    error: searchError,
    refetch: searchRefetch,
  } = useQuery(SEARCHSHIPMENTSBYSEARCHID, {
    variables: { id: searchId },
  });

  console.log(searchData);
  console.log(searchId);

  useEffect(() => {
    setShipments(searchData?.shipment);
  }, [searchData]);

  const handleSortingOrderChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value } = e.target;
    setSortingOrder(value);
  };

  const handleSortByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSortBy(value);
  };

  const goToNextPage = () => {
    if (pageNumber <= 3) {
      setPageNumber(pageNumber + 1);
    } else {
      setPageNumber(1);
    }
  };
  const goToPreviousPage = () => {
    if (pageNumber >= 1) {
      setPageNumber(pageNumber - 1);
    } else if (pageNumber === 1) {
      setPageNumber(1);
    } else {
      setPageNumber(1);
    }
  };

  return (
    <div>
      <Header />
      <Hero />
      <ShipmentSearchContainer>
        <div className="content">
          <div className="bar_left" />
          <div className="bar_right" />
          <div className="search_content_container">
            <p className="title">track your shipment</p>
            <p className="sub_title">Now you can track your shipment easily</p>
          </div>
          <SearchShipmentBar handleSearchChange={getSeachId} />
        </div>
      </ShipmentSearchContainer>
      {loading === true ? <Loader /> : null}
      {searchLoading === true ? <Loader /> : null}
      <AlertBox
        error={error ? "An Unexpected Error has occured" : null}
        success={data ? "FETCHED SUCCESSFULLY" : null}
      />
      <SortSelectContainer>
        <SelectContainer>
          <Select
            name="Sort-By"
            onChange={handleSortByChange}
            defaultValue="id"
            selectOptions={[
              "id",
              "name",
              "destination",
              "origin",
              "status",
              "userId",
            ]}
          />
          <Select
            name="Sort-Order"
            defaultValue="asc"
            selectOptions={["asc", "desc"]}
            onChange={handleSortingOrderChange}
          />
        </SelectContainer>
      </SortSelectContainer>
      <div className="mt-40">
        <PageBody>
          <Shipment shipments={shipments} />
          <Paginator
            goToNextPage={goToNextPage}
            goToPreviousPage={goToPreviousPage}
          />
        </PageBody>
      </div>
    </div>
  );
};

export default HomeScreen;
