import { Button, Dropdown, Menu, Space } from 'antd'
import React from 'react'
import LogoSVG from '../SVGs/LogoSVG'
import { Link } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { googleLogout } from '@react-oauth/google';

const Header = () => {
    const dispatch=useDispatch();
    const auth=useSelector(state=>state.auth);
    const handleUserLogout=()=>{
        if(auth.isGoogleLogin) googleLogout();
        dispatch({type:'user_logout'});
    }
    const menu = (
        <Menu onClick={handleUserLogout}>
            <Menu.Item>Logout</Menu.Item>
        </Menu>
    );
    return (
        <div className="container">
            <div className='logo-bar d-flex align-items-center justify-content-between mt-3 ps-3 pe-5'>
                <LogoSVG/>
                {console.log(auth?.picture)}
                {auth ? 
                <div>
                    <Dropdown overlay={menu} trigger={['click']}>
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                {auth.given_name}
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                </div>
                :
                <Link to='/auth'><Button type="primary">Sign In</Button></Link>}
            </div>
        </div>
    )
}

export default Header