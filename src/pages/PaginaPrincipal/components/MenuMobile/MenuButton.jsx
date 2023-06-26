import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../../components/form/Button";

const MenuButton = ({children, to, color, border}) => {
  return (
    <Link to={to}>
      <Button color={color} border={border}>{children}</Button>
    </Link>
  );
};

export default MenuButton;
