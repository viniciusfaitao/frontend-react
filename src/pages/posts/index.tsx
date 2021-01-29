import React, { useContext } from "react";
import { PostsContext } from "../../contexts/postsContext/index";
import { PageContext } from "../../contexts/pageContext";
import "./style.scss";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Pagination from "@material-ui/lab/Pagination";

export const Posts = () => {
  const { posts, totalPages } = useContext(PostsContext);
  const { page, setPage } = useContext(PageContext);
  const logoMoovin =
    "https://www.moovin.com.br/wp-content/uploads/2020/12/logo-roda.png";

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setPage(newPage);
  };

  return (
    <>
      <div className="page-head">
        <img alt="Logo da Moovin" src={logoMoovin} />
      </div>
      <div className="page-body">
        <div className="body-box">
          <h3>Últimas postagens</h3>
          <TableContainer className="body-posts" component={Paper}>
            <Table aria-label="a dense table">
              <TableHead className="posts-head">
                <TableRow>
                  <TableCell>
                    <p>Titulo</p>
                  </TableCell>
                  <TableCell>
                    <p>Conteúdo</p>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {posts.map(
                  (post: {
                    id: string | number | undefined,
                    title: React.ReactNode,
                    body: React.ReactNode,
                  }) => (
                    <TableRow
                      className="posts-content"
                      key={post.id}
                      tabIndex={-1}
                    >
                      <TableCell
                        className="content-title"
                        component="th"
                        scope="row"
                      >
                        {post.title}
                      </TableCell>
                      <TableCell className="content-body" align="right">
                        {post.body}
                      </TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
            <div className="posts-pagination">
              <p>Exibindo {posts.length} postagens</p>
              <Pagination
                className="posts-pagination-nav"
                count={totalPages}
                page={page}
                onChange={handleChangePage}
                variant="outlined"
                shape="rounded"
                size="medium"
              />
            </div>
          </TableContainer>
        </div>
      </div>
    </>
  );
};
