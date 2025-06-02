import NavBar from './NavBar.jsx';
import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router';
import NewRecipeModal from './NewRecipeModal.jsx';
import { useState } from 'react';

export default function Layout() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <NavBar handleOpen={handleOpen} />
      <Outlet />
      <ToastContainer />
      <NewRecipeModal open={open} handleClose={handleClose} />
    </>
  )
}