import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navBar";

const { Header, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  color: "#fff",
  height: 58,
  paddingInline: 24,
  lineHeight: "58px",
  backgroundColor: "#4096ff",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#0958d9",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#1677ff",
};

const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
};

export default function MainLayout() {
  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <NavBar />
      </Header>
      <Layout>
        <Content style={contentStyle}>
          <Outlet />
        </Content>
        <Sider width="25%" style={siderStyle}>
          Sider
        </Sider>
      </Layout>
    </Layout>
  );
}
