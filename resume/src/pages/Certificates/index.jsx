import React from 'react';
import { Typography, Card, Image } from 'antd';
import certificateImg from '../../assets/certificateFront-endBasic.jpg';

const { Title, Paragraph } = Typography;

const Certificates = () => {
  return (
    <div style={{ padding: 24 }}>
      <Title level={2}>Сертифікати</Title>

      <Card
        hoverable
        style={{ width: 400, marginTop: 16 }}
        cover={
          <Image
            alt="Сертифікат Front-end Basic"
            src={certificateImg}
            width="100%"
            style={{ objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
          />
        }
      >
        <Card.Meta
          title="Front-end Basic"
          description="Сертифікат за проходження курсу з основ фронтенд-розробки"
        />
      </Card>
      <Paragraph style={{ marginTop: 16 }}>
        Плюс я відрахувався після першого курса з бурси під назвою:
         Державний університет інформаційно-комунікаційних технологій
         </Paragraph>
    </div>
    
  );
};

export default Certificates;

