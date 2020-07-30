import * as React from 'react'
import {IChart} from '../../types'
import { nodeInfo } from '../../../stories/misc/exampleChartState'
//import { ILink} from '../../'

export interface ScriptDisplayProps {
  chart: IChart
}


export const ScriptDisplay = (props: ScriptDisplayProps) => {
  const {chart }= props;

  console.log('links in ScriptDisplay');
  console.log(chart.links)
  const createScript = ()=>{
    const scriptObject = {}
    Object.keys(chart.links).map ( (key)=>{
      const originNode = chart.links[key].from.nodeId;
      const originPort = chart.links[key].from.portId;
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

        // if menu node, set the 'next' of the correct menu button 
        // need to handle conditionals here as well
        if (scriptObject[originNode].hasOwnProperty("menu")){
          const arrayOutPorts = Object.keys(chart.nodes[originNode].ports).filter( (port)=> { 
            return (chart.nodes[originNode].ports[port].type === 'output')
          })
          //find index of output port on node
          const index = arrayOutPorts.indexOf(originPort);
          scriptObject[originNode].menu[index].next = destNode;
        }
        else {
          scriptObject[originNode].next = destNode;
        }
      }
    } )
    return (<div ><pre>{JSON.stringify(scriptObject, null, 2) }</pre></div>)
  }

  return (
    <div  style={{overflowY:'scroll'}}>
      <div>
        { createScript() }
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
