import {
  Button,
  Layout,
  Menu,
  Breadcrumb,
  Divider,
  Space,
  Typography,
  Affix,
  Row,
  Col,
} from "antd";
import React from "react";
import Navbar from "../components/_ui/Navbar/navbar";

const { Header, Footer, Sider, Content } = Layout;

const Portfolio: React.FC = () => {
  return (
    <>
      <Layout className="h-screen">
        <Navbar />
        <Content className="bg-[#F8F8F8] ">
          <div className="p-32">
            <Row className="flex flex-row justify-around items-center">
              <Col>
                <Typography.Title level={1}>
                  Olá,
                  {
                    <span role="img" aria-label="sheep">
                      👋
                    </span>
                  }
                </Typography.Title>
                <Typography.Title level={1}>Meu nome é Lucas!</Typography.Title>
                <Typography.Text className="font-concert-one">
                  Sou desenvolvedor júnior
                </Typography.Text>
              </Col>
              <Col>
                <div className="rounded-full h-72 w-72 bg-yellow-600"></div>
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default Portfolio;
