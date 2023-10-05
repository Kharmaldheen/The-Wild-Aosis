import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";

import FormRowVertical from "../../ui/FormRowVertical";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";

function LoginForm() {
  const { login, isLoading } = useLogin();
  const [email, setEmail] = useState("kamaldeen@example.com");
  const [password, setPassword] = useState("pass1029");

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          disabled={isLoading}
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRowVertical>

      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          disabled={isLoading}
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button disabled={isLoading} size="large">
          {isLoading ? <SpinnerMini /> : "Login"}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
