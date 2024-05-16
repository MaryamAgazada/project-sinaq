import React from 'react'
import { Outlet, Link } from "react-router-dom";

function AdminNav() {
  return (
    <div>
  <nav>
        <ul>
          <li>
            <Link to="/admin/product">product</Link>
          </li>
          <li>
            <Link to="/admin/add">add</Link>
          </li>
          <li>
            <Link to="/admin/basket">basket</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default AdminNav
