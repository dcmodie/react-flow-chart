import * as React from 'react'
import {IChart} from '../../types'
import { nodeInfo } from '../../../stories/misc/exampleChartState'
//import { ILink} from '../../'

export interface ScriptDisplayProps {
  chart: IChart
}


export const ScriptDisplay = (props: ScriptDisplayProps) => {
  const {chart }= props;
  const createScript = ()=>{
    const scriptObject = {}
    Object.keys(chart.links).map ( (key)=>{
      const originNode = chart.links[key].from.nodeId;
      const destNode = chart.links[key].to.nodeId;
      if (originNode && destNode){
        Object.keys(nodeInfo[originNode]).map ( (key0: any) => {
          if (key0 !== 'dialog'){
            if (!scriptObject[originNode]) {
              scriptObject[originNode] = {};
            }
            scriptObject[originNode][key0] = nodeInfo[originNode][key0]
          }
        }) 
        scriptObject[originNode].next = destNode;
      }
    } )
    return (<div><pre>{JSON.stringify(scriptObject, null, 2) }</pre></div>)
  }

  return (
    <div>
{
      /*
      <div>links:
        {Object.keys(chart.links).map ( (item)=>{
          return (
            <div>
              <div>Link:</div>
              <div>from:{chart.links[item].from.nodeId}</div>
              <div>to:{chart.links[item].to.nodeId}</div>
            </div>
          )

        } )}
      </div>
      */
}
      <div>
        {createScript()}
      </div>
    </div>
  )
}

/*

      id: 'ci_whatisit_preexisting_11',
      type: 'output-only',
      readonly:true,
      position: {
        x: 300,
        y: 100,
      },
      ports: {
        port1: {
          id: 'port1',
          type: 'output',
          properties: {
            value: 'yes',
          },
        },
        port2: {
          id: 'port2',
          type: 'output',
          properties: {
            value: 'no',
          },
        },
      },
    },
*/
