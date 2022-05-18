import React from 'react';
import L from 'leaflet';
interface Props {
    position: L.ControlPosition;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    prepend?: boolean;
}
declare const Control: (props: Props) => JSX.Element;
export default Control;
