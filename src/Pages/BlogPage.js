import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getOneBlog } from "../Features/BlogSlice";

const BlogPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { blog, error, loading } = useSelector((store) => store.blog);
  useEffect(() => {
    dispatch(getOneBlog(id));
  }, []);
  if (loading) return <p>loading...</p>;
  if (error) return <p>something went wrong!</p>;
  return (
    <section>
      <Link to="/">home</Link>
      {blog.blog && (
        <div>
          <p>{blog.blog.title}</p>
          <p>{blog.blog.text}</p>
          <img src={blog.blog.image} />
        </div>
      )}
    </section>
  );
};

export default BlogPage;
