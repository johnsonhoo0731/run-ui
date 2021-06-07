export type ModalProps = {
  title?: string
  visible: boolean
  onOk?: () => void
  onCancel?: () => void
  okText?: string
  top?: number
}
