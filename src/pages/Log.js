import React from "react";
import Header from "../components/Header";
import useInput from "../hooks/useInput";
import { useMutation, useQueryClient } from "react-query";
import { addLog } from "../api/travelList";
import styled from "styled-components";
import "../fonts/font.css";
import Button from "../element/Button";

function Log() {
  //랜덤아이디 생성
  const makeId = () => {
    return Math.random().toString(36).substring(2, 16);
  };
  const id = makeId();

  //travelList데이터 불러오기
  const queryClient = useQueryClient();
  const mutation = useMutation(addLog, {
    onSuccess: () => {
      queryClient.invalidateQueries("travelList");
    },
  });
  const [title, onTitleHandler] = useInput("");
  const [content, onContentHandler] = useInput("");

  //Create
  const onSubmitHandler = (event) => {
    // event.preventDefault();
    if (title.trim() === "" || content.trim() === "")
      return alert("빈칸을 채워주세요");
    const newLog = {
      id: id,
      title: title,
      content: content,
    };
    mutation.mutate(newLog);
    alert(`🚗 ${title} 추억 등록 완료!`);
  };

  return (
    <>
      <Header>Log</Header>
      <InputForm onSubmit={onSubmitHandler}>
        title:
        <TitleInput
          type="text"
          name="title"
          placeholder="여행지를 입력해주세요! (10자 내외)"
          value={title}
          onChange={onTitleHandler}
          maxLength={10}
        />
        content:
        <ContentInput
          type="text"
          name="content"
          placeholder="여행에 대한 추억을 입력해주세요! (200자 내외)"
          value={content}
          onChange={onContentHandler}
          maxLength={200}
        />
        <Button label="기록하기" size="hover" />
      </InputForm>
    </>
  );
}

export default Log;

const InputForm = styled.form`
  margin: 0 auto;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  width: 800px;
  font-family: "LeeSeoyun";
  gap: 10px;
  font-size: 18px;
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
  height: 300px;
  border: 1px solid lightgray;
  font-family: "LeeSeoyun";
`;
