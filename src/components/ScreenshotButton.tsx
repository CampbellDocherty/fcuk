/* eslint-disable functional/immutable-data */
import React from 'react';
import { useScreenshot, createFileName } from 'use-react-screenshot';

const ScreenshotButton = React.forwardRef((props, ref: any) => {
  const [, takeScreenShot] = useScreenshot({
    type: 'image/jpeg',
    quality: 1.0,
  });

  const download = (
    screenshot: any,
    { name = 'fcuk-charcter', extension = 'jpg' } = {}
  ) => {
    const a = document.createElement('a');
    a.href = screenshot;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);
  return <button onClick={downloadScreenshot}>Screenshot</button>;
});

export default ScreenshotButton;
