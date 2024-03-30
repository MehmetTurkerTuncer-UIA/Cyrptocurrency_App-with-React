import React from 'react'
import {Button, Menu, Typography, Avatar} from "antd"
import {Link } from "react-router-dom"
import {HomeOutlined, MoneyColletOutlined, BulbOutlined, FundOutlined, MenOutlined} from "@ant-design/icons"

const Navbar = () => {
  return (

    <div className='navContainer'>
        <div className='logoContainer'>
            <Avatar/>
            <Typography.Title level={2}  className='logo'>
                <link to="/"  > Crypto currence</link>
            </Typography.Title>
        </div>
        {/* <button className='menuControlContainer'>


        </button> */}
        
    </div>
  )
}

export default Navbar