import { FC } from "react";
import styled from "styled-components";
import { COLOR } from "../../utils/theme";

const ModaBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
  z-index: 1000;
`
const ModalBox = styled.div`
  position: fixed;
  z-index: 1100;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  min-width: 480px;
  background: ${COLOR.light};
  padding: 1rem;
  border-radius: 1rem;
  min-height: 4rem;
`
const ModalContainer = styled.div`
  position: relative;
`
const ModalClose = styled.div`
  position: absolute;
  top: -1rem;
  right: 0rem;
  font-size: 1.5rem;
  cursor: pointer;
`
const NoneBox = styled.div`
  display: none;
`

interface ModalType {
  isOpen: boolean;
  onClose(): void;
  children: any;
}

export const Modal: FC<ModalType> = ({isOpen, onClose, children}) => {
  if(!isOpen) return <NoneBox />;

  return(
    <>
      <ModaBackground onClick={onClose} />
      <ModalBox>
        <ModalContainer>
          <ModalClose onClick={onClose}>x</ModalClose>
          {children}
        </ModalContainer>
      </ModalBox>
    </>
  )
}