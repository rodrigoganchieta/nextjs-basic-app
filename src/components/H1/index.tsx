import * as Styled from './styles';

export type H1Props = {
  children: React.ReactNode | string;
};

export const H1 = (props: H1Props) => {
  return <Styled.Title>{props.children}</Styled.Title>;
};
