import * as React from 'react'
import styled from 'styled-components'
import { IConfig, INode } from '../../'
import { dialogReference } from '../../../stories/misc/exampleChartState'

export interface INodeInnerDefaultProps {
  className?: string
  config: IConfig
  node: INode
}

const Outer = styled.div`
  padding: 40px 30px;
`

export const NodeInnerDefault = ({ node,className }: INodeInnerDefaultProps) => {
  console.log('node')
  console.log(node)
  return (
    <Outer className={className}>
      <div>{ dialogReference[node.id] ? dialogReference[node.id] : node.id}</div>
    </Outer>
  )
}
