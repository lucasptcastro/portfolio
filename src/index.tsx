import {
  Button,
  Layout,
  Menu,
  Breadcrumb,
  Divider,
  Space,
  Typography,
  Affix,
} from "antd";
import type { MenuProps } from "antd";
import React from "react";
import Image from "next/image";
import NodeJSLogo from "../public/nodejs.svg";

const { Header, Footer, Sider, Content } = Layout;

const items: any = [
  {
    key: "1",
    label: (
      <Typography.Text className="font-concert-one text-xl hover:text-yellow-600 hover:cursor-pointer">
        Início
      </Typography.Text>
    ),
  },
  {
    key: "2",
    label: (
      <Typography.Text className="font-concert-one text-xl hover:text-yellow-600 hover:cursor-pointer">
        Sobre
      </Typography.Text>
    ),
  },
  {
    key: "3",
    label: (
      <Typography.Text className="font-concert-one text-xl hover:text-yellow-600 hover:cursor-pointer">
        Habilidades
      </Typography.Text>
    ),
  },
  {
    key: "4",
    label: (
      <Typography.Text className="font-concert-one text-xl hover:text-yellow-600 hover:cursor-pointer">
        Educação
      </Typography.Text>
    ),
  },
  {
    key: "5",
    label: (
      <Typography.Text className="font-concert-one text-xl hover:text-yellow-600 hover:cursor-pointer">
        Experiências
      </Typography.Text>
    ),
  },
  {
    key: "6",
    label: (
      <Typography.Text className="font-concert-one text-xl hover:text-yellow-600 hover:cursor-pointer">
        Contatos
      </Typography.Text>
    ),
  },
];

const Portfolio: React.FC = () => {
  const [current, setCurrent] = React.useState("1");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <>
      <Layout className="layout">
        <Affix>
          <div className="bg-[#fff] h-16 rounded-sm flex flex-row items-center justify-between px-44">
            <Image src={NodeJSLogo} alt="NodeJS Logo" width={40} height={24} />
            <Typography>
              <Space size={40}>{items.map((item: any) => item.label)}</Space>
            </Typography>
          </div>
        </Affix>
        <Content className="bg-[#F8F8F8] h-screen">
          <div className="p-32">
            <div>
              <Typography.Title level={1}>
                Olá,
                {
                  <span role="img" aria-label="sheep">
                    👋
                  </span>
                }
              </Typography.Title>
              <Typography.Title level={1}>Meu nome é Lucas!</Typography.Title>
            </div>
            <Typography.Text className="font-concert-one">
              Sou desenvolvedor júnior
            </Typography.Text>
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default Portfolio;
