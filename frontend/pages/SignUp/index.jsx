import { Button, Error, Form, Header, Input, Label, LinkContainer, Success } from './styles';
import React, { useCallback, useState } from 'react';
import axios from 'axios';
import useInput from '@hooks/useInput';
import { Link, Redirect } from 'react-router-dom';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';

const SignUp = () => {
  const { data, error, revalidate } = useSWR('http://localhost:8080/api/users', fetcher);
  const [m_email, onChangeEmail, setEmail] = useInput('');
  const [m_name, onChangeNickname, setNickname] = useInput('');
  const [m_pwd, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [mismatchError, setMissmatchError] = useState(false);
  const [signUpError, setSignUpError] = useState('');
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const onChangePassword = useCallback(
    (e) => {
      setPassword(e.target.value);
      setMissmatchError(e.target.value === passwordCheck);
    },
    [passwordCheck],
  );

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setMissmatchError(e.target.value !== m_pwd);
    },
    [m_pwd],
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!mismatchError) {
        console.log('서버로 회원가입하기');
        setSignUpSuccess(false);
        setSignUpError('');
        axios
          .post('/api/users', {
            m_email,
            m_name,
            m_pwd,
          })
          .then((response) => {
            console.log(response);
            setSignUpSuccess(true);
          })
          .catch((error) => {
            console.log(error.response);
            setSignUpError(error.response.data);
          })
          .finally(() => {});
      }
    },
    [m_email, m_name, m_pwd, passwordCheck, mismatchError],
  );

  // if (data === undefined) {
  //   return <div>로딩중...</div>;
  // }

  if (data) {
    return <Redirect to="/workspace/channel"></Redirect>;
  }

  return (
    <div id="container">
      <Header>TODOLIST</Header>
      <Form onSubmit={onSubmit}>
        <Label id="email-label">
          <span>이메일 주소</span>
          <div>
            <Input type="email" id="email" name="email" value={m_email} onChange={onChangeEmail} />
          </div>
        </Label>
        <Label id="nickname-label">
          <span>닉네임</span>
          <div>
            <Input type="text" id="nickname" name="nickname" value={m_name} onChange={onChangeNickname} />
          </div>
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input type="password" id="password" name="password" value={m_pwd} onChange={onChangePassword} />
          </div>
        </Label>
        <Label id="password-check-label">
          <span>비밀번호 확인</span>
          <div>
            <Input
              type="password"
              id="password-check"
              name="password-check"
              value={passwordCheck}
              onChange={onChangePasswordCheck}
            />
          </div>
          {mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}
          {!m_name && <Error>닉네임을 입력해주세요.</Error>}
          {signUpError && <Error>{signUpError}</Error>}
          {signUpSuccess && <Success>회원가입되었습니다! 로그인해주세요.</Success>}
        </Label>
        <Button type="submit">회원가입</Button>
      </Form>
      <LinkContainer>
        이미 회원이신가요?&nbsp;
        <Link to="/login">로그인 하러가기</Link>
      </LinkContainer>
    </div>
  );
};

export default SignUp;
