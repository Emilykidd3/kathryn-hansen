// import React from 'react';
// import { useQuery } from '@apollo/react-hooks';
// import { QUERY_ADMIN, QUERY_ALL_EVENTS } from '../utils/queries';


// const Events = () => {
//   const { data, loading } = useQuery(QUERY_ALL_EVENTS);

//   if (loading) return <div>Loading...</div>;

// //   if (error) console.error(error);

//   console.log(data);

//   return (
//     <div>
//         {data.admin.titleList > 0
//             ? data.admin.titles.map((el) => (
//                 <p>{el.title}</p>
//             ))
//             : ''}
//     </div>
//   );
// };

// export default Events;