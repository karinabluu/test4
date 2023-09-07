import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import nextId from 'react-id-generator';
import { addTodo } from '../../../redux/modules/todos.js';

const Form = () => {
  const id = nextId();

  const [todo, setTodo] = useState({
    id: 0,
    title: '',
    body: '',
    isDone: false,
  });

  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (todo.title.trim() === '' || todo.body.trim() === '') return;

    const newId = nextId();

    dispatch(
      addTodo({
        ...todo,
        id: newId,
      })
    );

    setTodo({
      id: 0,
      title: '',
      body: '',
      isDone: false,
    });
  };

  return (
    <StyledForm onSubmit={onSubmitHandler}>
      <FormGroup>
        <FormLabel>제목</FormLabel>
        <FormInput
          type="text"
          name="title"
          value={todo.title}
          onChange={onChangeHandler}
        />
        <FormLabel>내용</FormLabel>
        <FormInput
          type="text"
          name="body"
          value={todo.body}
          onChange={onChangeHandler}
        />
      </FormGroup>
      <FormButton>추가하기</FormButton>
    </StyledForm>
  );
};

export default Form;

const StyledForm = styled.form`
  background-color: #eee;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const FormLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
`;

const FormInput = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
`;

const FormButton = styled.button`
  border: none;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: #fff;
  font-weight: 700;
`;
