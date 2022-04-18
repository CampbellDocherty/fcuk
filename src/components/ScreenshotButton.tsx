/* eslint-disable functional/immutable-data */
import { getStorage, ref as storageRef, uploadString } from 'firebase/storage';
import React, { useState } from 'react';
import { useScreenshot, createFileName } from 'use-react-screenshot';
import Screenshot from '../assets/fcuk-screenshot-button.png';
import firebaseApp from '../firebase';
import { ScreenshotButtonImage, StyledButton } from '../styles';

const ScreenshotButton = React.forwardRef((props, ref: any) => {
  const [mouseDownOnButton, setMouseDownOnButton] = useState(false);

  const firebaseStorage = getStorage(firebaseApp);
  const [, takeScreenShot] = useScreenshot({
    type: 'image/jpeg',
    quality: 1.0,
  });

  const upload = async (screenshot: any) => {
    const base64Image = screenshot.replace(/data:image\/jpeg;base64,/g, '');
    const firebaseRef = storageRef(firebaseStorage, new Date().toString());
    await uploadString(firebaseRef, base64Image, 'base64', {
      contentType: 'image/jpeg',
    });
  };

  const download = (
    screenshot: any,
    { name = 'fcuk-charcter', extension = 'jpg' } = {}
  ) => {
    const a = document.createElement('a');
    a.href = screenshot;
    a.download = createFileName(extension, name);
    a.click();
    return screenshot;
  };

  const downloadScreenshot = () =>
    takeScreenShot(ref.current).then(download).then(upload);

  const onMouseDown = () => {
    setMouseDownOnButton(true);
  };
  const onMouseUp = () => {
    setMouseDownOnButton(false);
  };

  return (
    <StyledButton
      onClick={downloadScreenshot}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onKeyDown={onMouseDown}
      onKeyUp={onMouseUp}
      onTouchEnd={onMouseUp}
      onTouchStart={onMouseDown}
    >
      <ScreenshotButtonImage
        src={Screenshot}
        alt={'screenshot button'}
        mouseDown={mouseDownOnButton}
      />
    </StyledButton>
  );
});

export default ScreenshotButton;
