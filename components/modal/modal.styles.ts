import styled from 'styled-components'

export const Mask = styled.div`
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
`

export const ModalContainer = styled.div<{ visible: boolean; top?: number }>`
  width: 400px;
  min-width: 300px;
  min-height: 200px;
  background: #fff;
  border: 1px solid #000;
  border-radius: 10px;
  position: relative;
  margin: 0 auto;
  top: ${(p) => (p.top ? top + 'px' : 'unset')};
  display: ${(p) => (p.visible ? 'block' : 'none')};
`

export const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  padding: 6px 10px;
`

export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 40px;
  width: 100%;
  > button {
    position: absolute;
  }
  > button:nth-child(1) {
    right: 110px;
  }
  > button:nth-child(2) {
    right: 10px;
  }
`
