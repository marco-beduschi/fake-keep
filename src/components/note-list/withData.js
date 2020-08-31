import React, {useEffect, useState} from 'react';

export const withData = (WrappedComponent) => {
  return (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch('https://fake-keep-api.herokuapp.com/notes?page=0&per_page=10')
        .then((response) => response.json())
        .then((responseData) => setData(responseData));
    }, []);

    return <WrappedComponent {...props} data={data} />;
  };
};
