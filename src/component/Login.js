import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
          <SignUp>Get All There</SignUp>
          <Description>
            Get Premier Acess to Raya and the Last Dragon for an additional fee
            with aDisney+ subscription. As of 11/10/24, the price of Disney+ and
            The Disney Bundle will increase by 1$
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};
const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;
const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;
const BgImage = styled.div`
  height: 100%;
  background-image: url("/images/login-background.jpg");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

const CTA = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  text-align: center;
  margin-top: 0;
  margin-right: auto;
  margin-left: auto;
  transition-timing-function: ease-Out;
  transition: opacity 0.2s;
  width: 100%;
`;
const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;
const SignUp = styled.a`
  font-weight: bold;
  text-transform: uppercase;
  background-color: #0063e5;
  width: 100%;
  margin-bottom: 12px;
  color: #f9f9f9;
  font-szie: 18px;
  padding: 16.5px 0;
  letter-spacing: 1.5px;
  border: 1px solid transpanent;

  &:hover {
    background-color: #0483ee;
  }
`;
const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5em;
  letter-spacing: 1.5px;
`;
const CTALogoTwo = styled.img`
  max-width: 600px;
  display: inline-block;
  margin-bottom: 20px;
  vertical-align: bottom;
  width: 100%;
`;

export default Login;
