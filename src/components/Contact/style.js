import styled from "styled-components";

export const ContactSection = styled.div`
  padding: 50px 0;
  text-align: center;
`;

export const ContactTitle = styled.h2`
  font-size: 60px;
  margin-bottom: 30px;
  @media (max-width: 575px) {
    font-size: 40px;
  }
`;

export const SpanTitle = styled.span`
  font-weight: normal;
`;

export const FormContact = styled.form`
  width: 70%;
  margin: auto;
  @media (max-width: 575px) {
    width: 90%;
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  outline: 0;
  padding: 5px;
  margin-bottom: 10px;
  @media (max-width: 575px) {
    width: 100%;
  }
`;

export const FormInput = styled.div`
  overflow: hidden;
`;

export const InputText = styled(Input)`
  float: left;
  width: 49%;
`;

export const InputEmail = styled(Input)`
  float: right;
  width: 49%;
`;

export const InputSub = styled(Input)`
  width: 100%;
`;

export const Textarea = styled.textarea`
  width: 100%;
  outline: 0;
  background: #ccc;
`;

export const InputSubmit = styled(Input)`
  width: 30%;
  background: #eb5424;
  border: 0;
  color: #fff;
  cursor: pointer;
  box-shadow: 0 9px #EFEFEF;
  &:hover {
    background: #f37405;
    text-decoration: none;
  }
  &:active {
    box-shadow: 0 1px #EFEFEF;
    transform: translateY(4px);
  }
`;
