import * as React from 'react';

export interface ImageIconProps {
  className: string,
  src: any,
}

const ImageIcon = ({ className, src }: ImageIconProps) => {
  return (
    <img className={className} src={src}/>
  );
};

export default ImageIcon;