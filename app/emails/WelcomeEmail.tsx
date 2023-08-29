import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

import { Tailwind } from "@react-email/tailwind";

interface NotionMagicLinkEmailProps {
  loginCode?: string;
}

export const NotionMagicLinkEmail = ({
  loginCode = "sparo-ndigo-amurt-secan",
}: NotionMagicLinkEmailProps) => (
  <Html>
    <Head />
    <Preview>
      Welcome email, formulated with React Email, sent via Resend
    </Preview>
    <Tailwind>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Welcome</Heading>

          <Text style={{ ...text, marginBottom: "14px" }} className="text-xl">
            This email is formulated with
            {/*  <Img
              className="w-auto h-7 relative hidden dark:block"
              src={`https://mintlify.s3-us-west-1.amazonaws.com/react-email/logo/dark.svg`}
              alt="dark logo"
            /> */}
            <Img
              src={
                "https://mintlify.s3-us-west-1.amazonaws.com/react-email/logo/light.svg"
              }
              alt="react-email logo"
              className="inline -mb-2"
            />
            , sent via Resend
          </Text>

          <code style={code}>{loginCode}</code>

          <Text style={footer}>
            for your notes, tasks, wikis, and databases.
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default NotionMagicLinkEmail;

const main = {
  backgroundColor: "#ffffff",
};

const container = {
  paddingLeft: "12px",
  paddingRight: "12px",
  margin: "0 auto",
};

const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
};

const link = {
  color: "#2754C5",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  textDecoration: "underline",
};

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "24px 0",
};

const footer = {
  color: "#898989",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "12px",
  lineHeight: "22px",
  marginTop: "12px",
  marginBottom: "24px",
};

const code = {
  display: "inline-block",
  padding: "16px 4.5%",
  width: "90.5%",
  backgroundColor: "#f4f4f4",
  borderRadius: "5px",
  border: "1px solid #eee",
  color: "#333",
};
