import React from 'react'
import { ModalProps } from './modal.types'
import { Mask, ModalContainer, Header, Footer } from './modal.styles'
import { Button } from '../../components'
import ReactDom from 'react-dom'

const Modal: React.FC<ModalProps> = ({
  title,
  visible,
  onOk,
  onCancel,
  okText,
  top,
  ...props
}) => {
  return ReactDom.createPortal(
    <ModalContainer visible={visible} top={top}>
      <Header>{title}</Header>
      {props.children}
      <Footer>
        <Button>{okText ? okText : '确定'}</Button>
        <Button originType={true}>取消</Button>
      </Footer>
    </ModalContainer>,
    document.body
  )
}

export default Modal
