// import { useState } from 'react'
import {Button, Dialog, Icon} from "@mui/material";
import "./Navbar.scss";
import Tooltip, {tooltipClasses} from "@mui/material/Tooltip";
import {styled} from "@mui/material/styles";
import CategoryBoard from "./CategoryBoard/CategoryBoard";
import {useEffect, useState} from "react";
import {ButtonList} from "./CategoryBoard/CategoryContent";
import SearchBar from "../../../components/SearchBar/SearchBar";
import Login from "../../../pages/Login/Login";
import SignUp from "../../../pages/SignUp/SignUp";

const CustomProper = styled(({className, ...props}) => (
  <Tooltip placement="bottom-start" {...props} classes={{popper: className}} />
))(({theme}) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "white",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: "1024px",
    fontSize: theme.typography.pxToRem(12),
  },
  [`& .${tooltipClasses.tooltipPlacementBottom}`]: {
    marginTop: "0 !important",
  },
}));

const buttonList = ButtonList;

function Navbar() {
  var topButtonListData = [
    {
      id: 1,
      text: "Giỏ hàng",
      href: "/cart",
      icon: "shopping_cart",
      isHidden: false,
      action: () => console.log("Cart"),
    },
    {
      id: 2,
      text: "Đăng nhập",
      isHidden: false,
      href: "",
      action: () => handleLogin(),
    },
    {
      id: 3,
      text: "Đăng kí",
      isHidden: false,
      href: "",
      action: () => handleSignUp(),
    },
    {
      id: 3,
      text: "",
      isHidden: true,
      href: "",
      icon: "account_circle",
      action: () => console.log("test"),
    },
  ];

  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [topButtonList, setTopButtonList] = useState(topButtonListData);

  const [showPopper, setShowPopper] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      setTopButtonList(
        topButtonList.map((item, index) => {
          if (item.id === 1) return item;
          if (index === 1) {
            item.isHidden = true;
            return item;
          }
          if (index === 2) {
            item.isHidden = true;
            return item;
          }
          if (index === 3) {
            item.isHidden = false;
            return item;
          }
        })
      );
    }
  }, []);

  const handleLogin = () => {
    setLogin((prev) => !prev);
    if (localStorage.getItem("userInfo")) {
      setTopButtonList(
        topButtonList.map((item, index) => {
          if (item.id === 1) return item;
          if (index === 1) {
            item.isHidden = true;
            return item;
          }
          if (index === 2) {
            item.isHidden = true;
            return item;
          }
          if (index === 3) {
            item.isHidden = false;
            return item;
          }
        })
      );
    }
  };

  const handleSignUp = () => {
    setSignUp((prev) => !prev);
  };

  return (
    <>
      <div className="wrapper-navbar">
        <div className="top-navbar">
          <div className="logo-container">BrandName</div>
          <SearchBar />
          <div>
            {topButtonList
              .filter((x) => x.isHidden === false)
              .map((x, index) => (
                <Button
                  startIcon={
                    x.icon ? (
                      <Icon baseClassName="material-icons-outlined">
                        {x.icon}
                      </Icon>
                    ) : (
                      ""
                    )
                  }
                  className="top-button-item"
                  key={index}
                  href={x.href}
                  onClick={x.action}
                >
                  {x.text}
                </Button>
              ))}
          </div>
        </div>
        <div className="bottom-navbar">
          <CustomProper title={<CategoryBoard index={showPopper} />}>
            <div className="action-group">
              {buttonList.map((x, index) => (
                <Button
                  key={index}
                  startIcon={
                    x.icon ? (
                      <Icon baseClassName="material-icons-outlined">
                        {x.icon}
                      </Icon>
                    ) : (
                      ""
                    )
                  }
                  className="bottom-button-item"
                  href={x.href}
                  onMouseEnter={() => setShowPopper(index)}
                >
                  {x.text}
                </Button>
              ))}
            </div>
          </CustomProper>
        </div>
        <Dialog open={login} onClose={handleLogin}>
          <Login handleLogin={handleLogin} />
        </Dialog>
        <Dialog open={signUp} onClose={handleSignUp}>
          <SignUp handleSignUp={handleSignUp} />
        </Dialog>
      </div>
    </>
  );
}

export default Navbar;
