

import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function useNotifiCations(status, message) {
  const notify = () => toast(message,{
    transition: Zoom,
    type:status
  });
  return (
    [
      notify,
      ToastContainer,
    ]
  )
}

export default useNotifiCations
