

import { ToastContainer, Zoom, toast } from 'react-toastify';


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
