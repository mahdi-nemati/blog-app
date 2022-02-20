import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getOneBlog } from "../Features/BlogSlice";
import { CenterContainer, BlogTitle, Loading, Header } from "../Styles/Style";
const BlogPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { blog, error, loading } = useSelector((store) => store.blog);
  useEffect(() => {
    dispatch(getOneBlog(id));
  }, []);
  if (loading)
    return (
      <CenterContainer>
        <Loading>Loading...</Loading>
      </CenterContainer>
    );
  if (error)
    return (
      <CenterContainer>
        <Loading>Something went wrong !</Loading>
      </CenterContainer>
    );
  return (
    <section>
      {blog.blog && (
        <CenterContainer>
          <Header>
            <BlogTitle primary>{blog.blog.title}</BlogTitle>
            <Link to="/">back to home</Link>
          </Header>
          <img style={{ width: "800px" }} src={blog.blog.image} alt={blog.blog.title} />
          <p>{blog.blog.text}</p>
        </CenterContainer>
      )}
    </section>
  );
};

export default BlogPage;
