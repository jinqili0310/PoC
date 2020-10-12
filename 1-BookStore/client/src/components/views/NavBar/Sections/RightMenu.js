/*
 * @Author: Jinqi Li
 * @Date: 2020-08-05 04:28:43
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2020-10-12 00:40:22
 * @FilePath: /1-BookStore/client/src/components/views/NavBar/Sections/RightMenu.js
 */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu, Badge } from 'antd';
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

function RightMenu(props) {
	const user = useSelector((state) => state.user);

	const logoutHandler = () => {
		axios.get(`${USER_SERVER}/logout`).then((response) => {
			if (response.status === 200) {
				props.history.push('/login');
			} else {
				alert('Log Out Failed');
			}
		});
	};

	if (user.userData && !user.userData.isAuth) {
		return (
			<Menu mode={props.mode}>
				<SubMenu title={<span>User</span>}>
					<Menu.Item key="mail">
						<a href="/login">Signin</a>
					</Menu.Item>
					<Menu.Item key="app">
						<a href="/register">Signup</a>
					</Menu.Item>
				</SubMenu>
				{/* <Menu.Item key="mail">
          <a href="/login">Signin</a>
        </Menu.Item>
        <Menu.Item key="app">
          <a href="/register">Signup</a>
        </Menu.Item> */}
			</Menu>
		);
	} else {
		return (
			<Menu mode={props.mode}>
				<Menu.Item key="history">
					<a href="/history">History</a>
				</Menu.Item>

				<Menu.Item key="upload">
					<a href="/product/upload">Upload</a>
				</Menu.Item>

				<Menu.Item key="cart">
					<Badge count={user.userData && user.userData.cart.length}>
						<a href="/user/cart">Cart</a>
					</Badge>
				</Menu.Item>

				<Menu.Item key="logout">
					<a onClick={logoutHandler}>Logout</a>
				</Menu.Item>
			</Menu>
		);
	}
}

export default withRouter(RightMenu);
