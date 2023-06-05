import { storage } from 'firebase/firebase';
import { getDownloadURL, ref } from 'firebase/storage';
import { useState } from 'react';

export function useLoading(defaultValue: boolean = false) {
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

export function useDownloadURL() {
  const [downloadURL, setDownloadURL] = useState<string | null>(null);

  const getURL = async (storageURL: string) => {
    const url = await getDownloadURL(ref(storage, storageURL));

    setDownloadURL(url);
  };

  return [downloadURL, getURL] as const;
}
