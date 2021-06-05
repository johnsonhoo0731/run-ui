import { Button } from './components'
import React from 'react'
import ReactDom from 'react-dom'

ReactDom.render(
  <>
    <div style={{ marginBottom: 20 }}>
      <Button size="large" onClick={(e) => console.log(e)}>
        large
      </Button>
    </div>
    <div style={{ marginBottom: 20 }}>
      <Button size="medium" disabled onClick={(e) => console.log(e)}>
        medium
      </Button>
    </div>
    <div>
      <Button size="small" onClick={(e) => console.log(e)}>
        small
      </Button>
    </div>
  </>,
  document.body
)
