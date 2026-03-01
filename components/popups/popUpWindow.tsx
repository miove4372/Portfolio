"use client";

import { ReactNode, useRef } from "react";
import Draggable from "react-draggable";

interface windowProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
  header: string;
  
}

export default function PopUpWindow({ children, onClose, isOpen, header }: windowProps) {
  const nodeRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  return (
    <div style={overlayStyle}>
      <Draggable nodeRef={nodeRef} handle=".window-header">
        <div ref={nodeRef} style={windowStyle}>
          <div className="window-header" style={headerStyle}>
            <span>{header}</span>
            <button className="text-3xl hover:cursor-pointer" onClick={onClose}>
              ✕
            </button>
          </div>

          <div style={{ padding: "1rem" }}>
            {children}
          </div>
        </div>
      </Draggable>
    </div>
  );
}

const overlayStyle: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  zIndex: 1000,
  pointerEvents: "none",
};

const windowStyle: React.CSSProperties = {
  width: "650px",
  background: "var(--mainbox-color)",
  borderRadius: "12px",
  boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
  position: "absolute",
  top: "100px",
  left: "100px",
  pointerEvents: "auto",
};

const headerStyle: React.CSSProperties = {
  background: "var(--mainbox-strip)",
  color: "white",
  padding: "10px",
  margin: "2px",
  cursor: "grab",
  WebkitTextFillColor: "white",
  borderTopLeftRadius: "12px",
  borderTopRightRadius: "12px",
  borderBottomLeftRadius: "0px",
  borderBottomRightRadius: "0px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};