import * as React from 'react'
import styled from 'styled-components'
import { IConfig, INode } from '../../'

export interface INodeInnerDefaultProps {
  className?: string
  config: IConfig
  node: INode
}

const Outer = styled.div`
  padding: 40px 30px;
`

const clipData = {
	node1:{
      dialog:"Hi, I'm Harvey, I'm here to tell you about Life insurance.",
      nodeData:{
          clip:"hi_harvey",
          playbarPercentage:"0.1",
          next:"let_me_tell_you"
      }
  }
}


export const NodeInnerDefault = ({ node,className }: INodeInnerDefaultProps) => {
  return (
    <Outer className={className}>
      <div>{  clipData[node.id] ? clipData[node.id].dialog: 'no dialog'}</div>
    </Outer>
  )
}
