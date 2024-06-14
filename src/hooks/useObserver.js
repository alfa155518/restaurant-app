import { useInView } from "react-intersection-observer";

function useObserver() {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return [ref, inView];
}

export default useObserver;
