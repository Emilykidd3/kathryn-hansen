import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ALL_EVENTS } from '../utils/queries';
import { EmptySpace } from '../components/EmptySpace';


const Events = () => {
  const { data, loading } = useQuery(QUERY_ALL_EVENTS);

  const userData= data?.events || {};

  if (loading) return <div>Loading...</div>;

//   if (error) console.error(error);

  console.log(data.events);

  return (
    <div>
        <EmptySpace />
        {data.events.length > 0
            ? data.events.map((el) => (
                <p key={el._id}>{el.title}</p>
            ))
            : ''}
    </div>
  );
};

export default Events;