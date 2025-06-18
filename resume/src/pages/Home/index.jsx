import React from "react";
import { Typography, Row, Col, Card, Tag, Divider } from 'antd';

const { Title, Paragraph } = Typography;

const softSkills = [
  "Комунікація",
  "Пунктуальність",
  "Лідерство",
  "Жага до розвитку",
  "Вміння працювати в команді",
  "Адаптивність"
];

const hardSkills = [
  "HTML5, CSS3, SCSS",
  "JavaScript (ES6+)",
  "React, React Router",
  "Redux, Redux Toolkit",
  "REST API, Axios, Fetch",
  "Git, GitHub",
  "Vite, Webpack (базово)",
  "Ant Design, Tailwind CSS",
  "Figma (читання макетів)"
];

const Home = () => {
  return (
    <div style={{ padding: "24px"}}>
      <Typography>
        <Title>Про мене</Title>
        <Paragraph>
          Привіт! Я — початковий Front-End розробник із великим бажанням зростати професійно. Вмію працювати з сучасними інструментами розробки, швидко навчаюся, вмію працювати як самостійно, так і в команді.
        </Paragraph>

        <Divider />

        <Title level={3}>Soft Skills</Title>
        <Row gutter={[16, 16]}>
          {softSkills.map((skill, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Card>
                <Tag color="blue">{skill}</Tag>
              </Card>
            </Col>
          ))}
        </Row>

        
        <Divider />

        <Title level={3}>Hard Skills</Title>
        <Row gutter={[16, 16]}>
          {hardSkills.map((skill, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Card>
                <Paragraph>{skill}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </Typography>
    </div>
  );
};

export default Home;
