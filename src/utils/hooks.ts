import { useState } from 'react';

function useLoading(defaultValue: boolean = false) {
  const [loading, setLoading] = useState<boolean>(defaultValue);

  const start = () => setLoading(true);
  const stop = () => setLoading(false);
  const toggle = () => setLoading(!loading);

  const loadingActions = {
    start,
    stop,
    toggle,
  } as const;

  return [loading, loadingActions] as const;
}

export default useLoading;

