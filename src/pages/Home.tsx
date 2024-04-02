import { Button, Tabs } from "antd";
import { useNavigate } from "react-router-dom";

const items = new Array(3).fill(null).map((_, i) => {
  const id = String(i + 1);
  return {
    label: `Tab ${id}`,
    key: id,
    children: `Content of tab ${id}`,
  };
});

export default function Home() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/me/following/suggestions");
  };

  return (
    <Tabs
      tabBarExtraContent={{
        left: (
          <Button className="tabs-extra-demo-button" onClick={onClick}>
            +
          </Button>
        ),
      }}
      items={items}
    />
  );
}
