import axios from 'axios';
import { useEffect, useReducer } from 'react';
import Swal from 'sweetalert2';

const useDataFetch = () => {
  const baseURL = process.env.REACT_APP_BASE_URL;
  const endPoints = ['posts', 'comments', 'users'];
  const initalState = {
    posts: [],
    comments: [],
    users: [],
  };

  const [values, setValues] = useReducer((prev, next) => ({ ...prev, ...next }), initalState);

  const fetchData = async () => {
    try {
      const promises = endPoints.map(async ep => await axios.get(baseURL + ep));
      // console.log(promises);
      const promiseStatus = await Promise.allSettled([...promises]);
      // console.log(promiseStatus);
      const results = promiseStatus.map(result => {
        return result?.status === 'fulfilled' ? result?.value?.data : [{ url: result?.reason?.config?.url, err: result?.reason?.message }];
        // console.log(result);
      });
      const [posts, comments, users] = [...results];
      setValues({ posts, comments, users });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message,
      });
    }

  };

  useEffect(() => {
    fetchData();
  }, []);

  return values;
};

export default useDataFetch;
