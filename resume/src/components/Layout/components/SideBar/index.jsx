import React from "react";
import { Card, Avatar, Descriptions, Typography } from "antd";
import {
    CalendarOutlined,
    HomeOutlined
} from "@ant-design/icons"

import profile from "../../../../assets/profile.jpg";
import styles from "./SideBar.module.css"

const { Title } = Typography;

const SideBar = () => {
    return(
       <Card className={styles.sideBar} bordered>
        <div className={styles.sbHeader}>
            <Avatar src={profile} size={120} />
            <Title level={4} style={{ marginTop: 16 }}>Богдан Петренко</Title>
        </div>
        <Descriptions
            column={1}
            size="small"
            layout="vertical"
            labelStyle={{ fontWeight: 500 }}
            >
            <Descriptions.Item label="Дата народження">
                <CalendarOutlined /> 9 січня 2006
            </Descriptions.Item>
            <Descriptions.Item label="Місто">
                <HomeOutlined /> Шишаки, Україна
            </Descriptions.Item>
            </Descriptions>
       </Card>
    )
}

export default SideBar;