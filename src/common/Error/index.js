import { Wrapper, ErrorIcon, Title, Subtitle, Button } from "./styled";

export const Error = () => {
  return (
    <Wrapper>
      <ErrorIcon />
      <Title>
        Ooops! Something went wrong...
      </Title>
      <Subtitle>
        Please check your network connection and try again
      </Subtitle>
      <Button>

      </Button>
    </Wrapper>
  );
};