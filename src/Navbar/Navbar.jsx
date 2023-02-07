import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../App";
import { Switch, Space } from "antd";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav className="nav-work">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/works">Works</Link>
        </li>

        <li className="buttonqqh">
          <Space direction="vertical">
            <Switch
              checked={theme === "light"}
              checkedChildren="Lumos"
              unCheckedChildren="Darkos"
              onChange={toggleTheme}
            />
          </Space>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
