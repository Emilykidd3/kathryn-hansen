import React, { Fragment } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { QUERY_ADMIN } from "../utils/queries";

const EventList = () => {
  const { data, loading } = useQuery(QUERY_ADMIN);

  if (loading) return <div>Loading...</div>;

  //   if (error) console.error(error);

  return (
    <div>
      {data.admin.events > 0
        ? data.admin.map((el) => <div> key={el.title}</div>)
        : ""}
    </div>
  );
};

export default EventList;
