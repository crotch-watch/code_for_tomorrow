import { useContext } from "react";
import { ctx } from "./ContextProvider";
import { Post } from "./Card.component";
import { Pagination } from "@mui/material";

export function CardContainer() {
  const {
    posts,
    currPage,
    setCurrPage,
    visiblePosts,
    filterVisiblePosts,
    shiftPosts,
    pageCount,
  } = useContext(ctx);

  let postlist;

  if (visiblePosts && visiblePosts.length > 0) {
    postlist = visiblePosts.map(({ body, title, id }) => (
      <>
        <Post body={body} title={title} key={id} />
        <div
          style={{ cursor: "pointer" }}
          onClick={() => shiftPosts(id, currPage)}
        >
          {" "}
          X{" "}
        </div>
      </>
    ));
  }

  return (
    <>
      {postlist}
      <Pagination
        count={pageCount}
        shape="rounded"
        size="small"
        page={currPage}
        hideNextButton={currPage === pageCount}
        hidePrevButton={currPage === 0}
        onChange={(e) => {
          console.log(e);
          if (currPage === pageCount || currPage === 0) return;
        }}
        onClick={(e) => {
          const pageNum = e.target.textContent;
          filterVisiblePosts(pageNum, posts);
          setCurrPage(pageNum);
        }}
      />
    </>
  );
}
