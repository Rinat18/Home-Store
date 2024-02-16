import React, { useEffect } from "react";
import "./Navbar.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContextProvider";
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useAuth } from "../../context/AuthContextPrvider";

export default function Navbar() {
  const { user, handleLogOut } = useAuth();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { addProductToCart, getProductsCountInCart } = useCart();
  const navigate = useNavigate();
  const [badgeCount, setBadgeCount] = React.useState(0);
  useEffect(() => {
    setBadgeCount(getProductsCountInCart());
  }, [addProductToCart]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <div className="header">
        <div className="header__container">
          <div className="header__logo">
            <NavLink to={"/"}>
              <div style={{ color: "white" }}>
                RINAT<span>HUB</span>
              </div>
            </NavLink>
          </div>
          <div className="header__buttons">
            <FavoriteBorderIcon onClick={() => navigate("/favorite")} />

            <button className="header__cart">
              <Badge badgeContent={badgeCount} sx={{ color: "#fff" }}>
                <NavLink to={"/cart"}>
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.36 7.12C13.3771 6.98042 13.3645 6.83881 13.3232 6.7044C13.2818 6.57 13.2126 6.44583 13.12 6.34C13.0263 6.23333 12.9109 6.14784 12.7816 6.08922C12.6523 6.03059 12.512 6.00018 12.37 6H1.62998C1.48799 6.00018 1.34767 6.03059 1.21836 6.08922C1.08904 6.14784 0.973688 6.23333 0.879978 6.34C0.787381 6.44583 0.718144 6.57 0.676789 6.7044C0.635435 6.83881 0.622891 6.98042 0.639978 7.12L1.38998 13.12C1.41945 13.3639 1.53769 13.5884 1.72213 13.7507C1.90657 13.913 2.1443 14.0018 2.38998 14H11.63C11.8757 14.0018 12.1134 13.913 12.2978 13.7507C12.4823 13.5884 12.6005 13.3639 12.63 13.12L13.36 7.12Z"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.5 6V5.5C2.5 4.30653 2.97411 3.16193 3.81802 2.31802C4.66193 1.47411 5.80653 1 7 1C8.19347 1 9.33807 1.47411 10.182 2.31802C11.0259 3.16193 11.5 4.30653 11.5 5.5V6"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5 9V11"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9 9V11"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </NavLink>
              </Badge>
            </button>
            <button className="header__auth">
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt={user.email}
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {user ? (
                    <MenuItem onClick={() => handleLogOut()}>
                      <Typography>LogOut</Typography>
                    </MenuItem>
                  ) : (
                    <Link to={"/auth"}>
                      <MenuItem>
                        <Typography>Log In</Typography>
                      </MenuItem>
                    </Link>
                  )}
                </Menu>
              </Box>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
