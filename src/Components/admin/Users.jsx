import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import me from "../../assets/me.webp"

const Users = () => {
    const arr = [1,2,3,4] ;
  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>User Id </th>
              <th>Name</th>
              <th>Photo</th>
              <th>Role</th>
              <th>Since</th>
              
            </tr>
          </thead>

          <tbody>
            {arr.map((i) => (
              <tr key={i}>
                <td>#12345</td>
                <td>Lovelesh</td>
                <td>
                    <img src={me} alt='Hy' />
                </td>
                <td>Admin</td>
                <td>24-1-2024</td>
                <td>
                  <Link to={`/order/${"asdsds"}`}>
                    <AiOutlineEye />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>

    
  )
}

export default Users