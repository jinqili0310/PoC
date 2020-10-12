/*
 * @Author: Jinqi Li
 * @Date: 2020-08-05 04:28:43
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2020-10-11 10:18:56
 * @FilePath: /1-BookStore/client/src/components/views/NavBar/Sections/LeftMenu.js
 */
import React from 'react';
import { Menu } from 'antd';

function LeftMenu(props) {
	return (
		<Menu mode={props.mode}>
			<Menu.Item key="about">
				<a href="/">About Elsevier</a>
			</Menu.Item>
			<Menu.Item key="product">
				<a href="/">Products & Solutions</a>
      </Menu.Item>
      <Menu.Item key="service">
				<a href="/">Services</a>
      </Menu.Item>
      <Menu.Item key="shop">
				<a href="/">Shop & Discover</a>
			</Menu.Item>
		</Menu>
	);
}

export default LeftMenu;
