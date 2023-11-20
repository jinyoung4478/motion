import styled from 'styled-components';

const Container = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 100px 20px;
  background-image: radial-gradient(rgba(0, 0, 0, 0) 1px, var(--background) 1px);
  background-size: 4px 4px;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  -moz-backdrop-filter: blur(3px);
  font-size: 14px;
  line-height: 14px;

  ::before {
    display: block;
    content: '';
    position: absolute;
    top: -1px;
    left: 0;
    right: 0;
    height: 1px;
    background: var(--accent);
    opacity: 0.2;
  }

  a {
    text-decoration: none;
    color: var(--accent);
  }
`;

export function Footer({ title = '' }) {
  return (
    <Container>
      <a href="https://www.framer.com/docs/scroll-animations/" target="_blank" rel="noreferrer">
        <code>{title}</code>
      </a>
    </Container>
  );
}
