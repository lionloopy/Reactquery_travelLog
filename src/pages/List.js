import React from "react";
import Header from "../components/Header";
import { getLog, deleteLog } from "../api/travelList";
import { Link } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import styled from "styled-components";
import { BsTrashFill, BsFillHandIndexThumbFill } from "react-icons/bs";
import "../fonts/font.css";

function List() {
  //데이터 불러오기
  const { data } = useQuery("travelList", getLog);

  const queryClient = useQueryClient();
  const mutation = useMutation(deleteLog, {
    onSuccess: () => {
      queryClient.invalidateQueries("travelList");
    },
  });

  //Delete
  const deleteHandler = (id) => {
    // const delData = data.filter((item) => item.id !== id);
    const message = window.confirm("❗ 기록을 삭제하시겠습니까?");
    if (message) {
      return mutation.mutate(id);
    } else {
      return;
    }
  };

  return (
    <>
      <Header>My Log List</Header>
      <ListBox>
        {data?.map((item) => {
          return (
            <div key={item.id}>
              <Lists>
                # {item.title} 기록
                <div>
                  <Link to={`/list/${item.id}`} key={item.id}>
                    <LogButton>
                      <BsFillHandIndexThumbFill />
                    </LogButton>
                  </Link>
                  <LogButton onClick={() => deleteHandler(item.id)}>
                    <BsTrashFill />
                  </LogButton>
                </div>
              </Lists>
            </div>
          );
        })}
      </ListBox>
    </>
  );
}

export default List;

const ListBox = styled.div`
  width: 800px;
  margin: 0 auto;
  margin-top: 4rem;
  font-family: "LeeSeoyun";
  font-size: 20px;
`;

const Lists = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  border-radius: 10px;
  padding: 20px;
  border: 1px solid lightgray;
  font-family: "LeeSeoyun";
`;

const LogButton = styled.button`
  border: none;
  border-radius: 20px;
  padding: 5px 15px;
  margin-right: 5px;
  &:hover {
    background-color: rgb(232, 196, 196);
  }
  font-family: "LeeSeoyun";
`;
