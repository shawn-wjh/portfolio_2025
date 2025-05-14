import { useState } from 'react';

export const useEmailCopy = () => {
  const [showCopyNotification, setShowCopyNotification] = useState(false);

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText("shawn.wjh@gmail.com");
      setShowCopyNotification(true);
      setTimeout(() => setShowCopyNotification(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return {
    showCopyNotification,
    handleEmailClick
  };
}; 