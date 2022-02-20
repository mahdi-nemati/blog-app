import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBlog } from "../Features/BlogSlice";
import { CenterContainer, BlogTitle, Loading } from "../Styles/Style";
const BlogList = () => {
  const { blog, error, loading } = useSelector((store) => store.blog);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlog());
  }, []);
  if (loading)
    return (
      <CenterContainer>
        <Loading>Loading...</Loading>
      </CenterContainer>
    );
  if (error) return (
    <CenterContainer>
      <Loading>Something went wrong !</Loading>
    </CenterContainer>
  );
  return (
    <main>
      {blog.blogs &&
        blog.blogs.map((b) => {
          return (
            <CenterContainer key={b._id}>
              <Link to={`blog/${b._id}`}>
                <BlogTitle>{b.title}</BlogTitle>
              </Link>
            </CenterContainer>
          );
        })}
    </main>
  );
};

export default BlogList;
