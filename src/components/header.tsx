import { Button } from '@material-tailwind/react'
import { RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';

import {Link, useNavigate} from 'react-router-dom'
import { clearAuthData } from '../store/authSlice';


const Header = () => {
  const { user} = useSelector((state: RootState) => state.auth)
 
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const logOUtHandler=async()=>{
    dispatch(clearAuthData());

    navigate('/login')
  }
  const loginHandler=()=>{

   
    navigate('/login')
  }
  return (
 
  <div className="flex  bg-base-100 shadow-lg px-5">
  <div className="flex-1 flex">
    <Link to={''} className="text-blue-600 text-xl">AUTOBSE</Link>
    <img src='AutoBSE_Logo.png' alt='AUTOBSE ' className='w-32'/>
  </div>
  <div className="flex gap-2">
    {/* <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered" />
    </div> */}
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        {/* <div className="w-10 rounded-full">
          <img src="../download-image.jpg" alt='Autobse'/>
        </div> */}
      </label>
      <ul tabIndex={0} className="mt-3 p-2  bg-base-100 rounded-lg w-52">
      
        <li>{user?.firstName} </li>
        <li>Role: {user?.role}</li>
       {user?.role==='staff' && <li>State: working</li>}
        
        
   
    {/* <li><button className='text-white  px-2 py-1  bg-red-500  rounded border'onClick={loginHandler}>Login</button></li> */}

        </ul>
       
    </div>
    <button className='text-white h-12  px-2 py-1  bg-red-500  rounded border'onClick={logOUtHandler}>Logout</button>
    {/* <button className='text-white  px-2 py-1  bg-red-500  rounded border'onClick={loginHandler}>Login</button>
    <button className='text-white  px-2 py-1  bg-red-500  rounded border'onClick={logOUtHandler}>Logout</button> */}
  </div>
</div>
  )
}

export default Header