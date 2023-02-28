import { createContext } from 'react';
import useDataFetch from '../api/data';

const PostContext = createContext();

const PostContextProvider = ({ children }) => {
  const data = useDataFetch();


  return <PostContext.Provider value={data}>{children}</PostContext.Provider>;
};

export { PostContextProvider };

export default PostContext;
