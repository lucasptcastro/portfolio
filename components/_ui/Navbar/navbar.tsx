import React from "react";
import { Affix, Col, Row, Space, Typography } from "antd";
import type { MenuProps } from "antd";

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

const Navbar: React.FC = () => {
  const [current, setCurrent] = React.useState("1");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <>
      <Affix className="bg-[#fff]">
        <Row className="justify-around items-center rounded-sm h-16">
          <Col>
            <Typography.Text className="font-concert-one text-3xl hover:text-yellow-600 hover:cursor-pointer">
              Lucas
            </Typography.Text>
          </Col>
          <Col>
            <Typography>
              <Space size={40}>{items.map((item: any) => item.label)}</Space>
            </Typography>
          </Col>
        </Row>
      </Affix>
    </>
  );
};

export default Navbar;
