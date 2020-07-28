import * as React from 'react'
import styled from 'styled-components'
import { IConfig, INode } from '../../'
import { nodeInfo } from '../../../stories/misc/exampleChartState'

export interface INodeInnerDefaultProps {
  className?: string
  config: IConfig
  node: INode
}

const Outer = styled.div`
  padding: 40px 30px;
`


export const NodeInnerDefault = ({ node,className }: INodeInnerDefaultProps) => {
  return (
    <Outer className={className}>
      <div>{  nodeInfo[node.id] ? nodeInfo[node.id].dialog: 'no dialog'}</div>
    </Outer>
  )
}
