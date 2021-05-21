import { NotFoundContainer, NotFoundError, NotFoundTitle, NotFoundText } from './Page404.styles';

export const Page404 = () => {
  return (
    <NotFoundContainer>
      <NotFoundError>ERROR</NotFoundError>
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundText>Page not found</NotFoundText>
    </NotFoundContainer>
  );
};