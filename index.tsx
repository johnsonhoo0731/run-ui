import { Button, Modal } from './components'
import React from 'react'
import ReactDom from 'react-dom'

ReactDom.render(
  <>
    <div style={{ marginBottom: 20 }}>
      <Button size="large" onClick={(e) => console.log(e)}>
        large
      </Button>
    </div>
    <Modal title="编辑" visible={true} />
  </>,
  document.body
)
