import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlog } from "../Features/BlogSlice";

const BlogList = () => {
  const { blog, error, loading } = useSelector((store) => store.blog);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlog());
  }, []);
  if (loading) return <p>loading...</p>;
  if (error) return <p>something went wrong!</p>;
  return (
    <main>
      {blog.blogs &&
        blog.blogs.map((b) => {
          return (
            <div key={b._id}>
              <p>{b.title}</p>
            </div>
          );
        })}
    </main>
  );
};

export default BlogList;