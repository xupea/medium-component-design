import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

import styles from "./index.module.css";

export default function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link className={styles.logo} to="/">
          <img width={44} src={logo} />
        </Link>

        <Input
          className={styles.search}
          size="large"
          placeholder="Search"
          prefix={<SearchOutlined />}
        />
      </div>

      <Link className={styles.logo} to="/new-story">
        Write
      </Link>

      <Link className={styles.logo} to="/me/notifications">
        Notification
      </Link>

      <Button shape="circle" icon={<UserOutlined />} />
    </div>
  );
}
