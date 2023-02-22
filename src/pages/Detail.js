import React, { useEffect, useState } from "react";
import useInput from "../hooks/useInput";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { updateLog } from "../api/travelList";
import { useMutation, useQueryClient } from "react-query";
import styled from "styled-components";
import { BsFillReplyFill } from "react-icons/bs";
import { FaPlane, FaBinoculars } from "react-icons/fa";
import map from "../img/map.png";
import "../fonts/font.css";
import Button from "../element/Button";

function Detail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [detail, setDetail] = useState({});

  //Read
  useEffect(() => {
    const detailLog = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/Log/${id}`
      );
      return data;
    };
    detailLog().then((result) => setDetail(result));
  }, [id]);

  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);

  //Update
  const [updateTitle, updateTitleHandler] = useInput("");
  const [updateContent, updateContentHandler] = useInput("");

  const queryClient = useQueryClient();
  const mutation = useMutation(updateLog, {
    onSuccess: () => {
      queryClient.invalidateQueries("travelList");
    },
  });
  const updateHandler = () => {
    const message = window.confirm("❗ 기록을 수정하시겠습니까?");
    if (!message) {
      return;
    } else {
      const payload = {
        id: id,
        title: updateTitle,
        content: updateContent,
      };
      mutation.mutate(payload);
      setDetail(payload);
      onToggle();
    }
  };

  const style = {
    cursor: "pointer",
    position: "absolute",
    left: "40px",
    fontSize: "25px",
  };
  return (
    <>
      <Header>
        <BsFillReplyFill
          style={style}
          onClick={() => {
            navigate("/list");
          }}
        />
        <Title>My Log</Title>
      </Header>
      <LogBox>
        <Img src={map} alt="" />
        <Box>
          <h3>나의 여행기록</h3>
          <ContentBox>
            <div>
              <FaPlane /> : {detail.title}
            </div>
            <div>
              <FaBinoculars /> : {detail.content}
            </div>
          </ContentBox>
          {/* 수정 공간 */}
          <Button onClick={onToggle} label="기록 수정하기" size="small" />
          {open && (
            <UpdateBox>
              <TitleInput
                type="text"
                placeholder="title"
                value={updateTitle}
                onChange={updateTitleHandler}
              />
              <ContentInput
                type="text"
                placeholder="content"
                value={updateContent}
                onChange={updateContentHandler}
              />
              <Button onClick={updateHandler} label="수정" size="hover" />
            </UpdateBox>
          )}
        </Box>
      </LogBox>
    </>
  );
}

export default Detail;

const Header = styled.div`
  margin-top: 2rem;
  display: flex;
  font-family: "Happiness-Sans-Title";
`;

const Title = styled.h1`
  text-align: center;
  margin: 0 auto;
  font-family: "Happiness-Sans-Title";
`;

const LogBox = styled.div`
  width: 800px;
  margin: 0 auto;
  text-align: center;
  margin-top: 4rem;
  font-family: "LeeSeoyun";
`;

const Img = styled.img`
  width: 500px;
  opacity: 0.5;
  position: relative;
`;

const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid lightgray;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  width: 800px;
  height: 400px;
  border-radius: 10px;
  padding: 40px;
  font-family: "LeeSeoyun";
  font-size: 17px;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  text-align: left;
  padding: 0 60px;
  gap: 10px;
  font-family: "LeeSeoyun";
`;

const UpdateBox = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  font-family: "LeeSeoyun";
`;

const TitleInput = styled.input`
  border-radius: 10px;
  padding: 20px;
  border: 1px solid lightgray;
  font-family: "LeeSeoyun";
`;

const ContentInput = styled.textarea`
  border-radius: 10px;
  padding: 20px;
  border: 1px solid lightgray;
  font-family: "LeeSeoyun";
`;
