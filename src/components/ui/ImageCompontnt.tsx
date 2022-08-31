import React from "react";
type Props = React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
    >;
const ImageComponent = (props: Props) => {
    return (
        <img
            alt={"IMAGE"}
            src={`${process.env.REACT_APP_IMAGE_ENDPOINT_BASE_URL}${props.src}`}
        />
    );
};

export default ImageComponent;
