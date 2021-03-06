import React, { useCallback } from 'react';
import { Redirect } from 'react-router-dom';
import fetcher from '@utils/fetcher';
import useSWR from 'swr';
import axios from 'axios';

const Workspace = ({ children }) => {
  const { data, error, revalidate, mutate } = useSWR('http://localhost:8080/api/users', fetcher);

  const onLogout = useCallback(() => {
    axios
      .post('http://localhost:8080/api/logout', null, {
        withCredentials: true,
      })
      .then(() => {
        // revalidate();
        mutate(false, false);
      });
  }, []);

  if (!data) {
    return <Redirect to="/login"></Redirect>;
  }

  return (
    <div>
      <button onClick={onLogout}>๋ก๊ทธ์์</button>
      {children}
    </div>
  );
};

export default Workspace;
