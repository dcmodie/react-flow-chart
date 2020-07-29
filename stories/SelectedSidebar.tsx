//import { cloneDeep, mapValues } from 'lodash'
import {  mapValues } from 'lodash'
import * as React from 'react'
import styled from 'styled-components'
import { FlowChart, ScriptDisplay } from '../src'
import * as actions from '../src/container/actions'
import { Content, Page, Sidebar } from './components'
import {  nodeInfo } from './misc/exampleChartState'
//import {  chartSimple } from './misc/exampleChartState'
//import { chartSimple, nodeInfo } from './misc/exampleChartState'
import { IChart } from '../src'

const Message = styled.div`
  margin: 10px;
  padding: 10px;
  line-height: 1.4em;
`

const Button = styled.div`
  padding: 10px 15px;
  background: cornflowerblue;
  color: white;
  border-radius: 3px;
  text-align: center;
  transition: 0.3s ease all;
  cursor: pointer;
  &:hover {
    box-shadow: 0 10px 20px rgba(0,0,0,.1);
  }
  &:active {
    background: #5682d2;
  }
`

const createChart = (nodeInfo: any)=>{
  const retVal: IChart = {    
    offset: {
        x: 0,
        y: 0,
      },
    scale: 1,
    nodes:{},
    links:{},
    selected: {},
    hovered: {}
  }

  Object.keys(nodeInfo).map ( (node: any, index)=>{
    retVal.nodes[node] = {
      id:node,
      type:'input-output',
      readonly:false,
      position:{x:300, y:130 * index},
      ports:{ 
        port1: {
            id: 'port1',
            type: 'input',
          },
          port2: {
            id: 'port2',
            type: 'output',
          }
      },
    }
    if (nodeInfo[node].next){
      let linkName = 'link_' + Math.floor(Math.random()*100000000);
      const fromNode = node;
      const toNode = nodeInfo[node].next;
      console.log ('creating link')
      console.log (linkName)
      retVal.links[linkName] = {
        id:linkName,
        from:{
          nodeId:fromNode,
          portId: "port2"
        },
        to:{
          nodeId:toNode,
          portId: "port1"
        }
      }

      console.log('link')
      console.log(retVal.links)

    }
  } )

/*
    link1: {
      id: 'link1',
      from: {
        nodeId: 'node1',
        portId: 'port2',
      },
      to: {
        nodeId: 'node2',
        portId: 'port1',
      },
      properties: {
        label: 'example link label',
      },
    },
    */



/*
  {
    offset: {
      x: 0,
      y: 0,
    },
    scale: 1,
    nodes: {
      ci_whatisit_preexisting_11: {
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
      ci_2: {
        id: 'ci_2',
        type: 'input-output',
        position: {
          x: 300,
          y: 300,
        },
        ports: {
          port1: {
            id: 'port1',
            type: 'input',
          },
          port2: {
            id: 'port2',
            type: 'output',
          },
        },
      },
      ci_3: {
        id: 'ci_3',
        type: 'input-output',
        position: {
          x: 100,
          y: 600,
        },
        ports: {
          port1: {
            id: 'port1',
            type: 'input',
          },
          port2: {
            id: 'port2',
            type: 'output',
          },
        },
      }
    },
    links: {
    },
    selected: {},
    hovered: {},
  }
  */
  return retVal;

}

export class SelectedSidebar extends React.Component {

  public state = (createChart(nodeInfo));
  //public state = cloneDeep(chartSimple)
  public render () {
    const chart = this.state
    const stateActions = mapValues(actions, (func: any) =>
      (...args: any) => this.setState(func(...args))) as typeof actions

    return (
      <div>
        <Page>
          <Content>
            <FlowChart
              chart={chart}
              callbacks={stateActions}
            />
          </Content>
          <Sidebar>

            {
             chart.selected.type
            ? <Message>
                <div>Type: {chart.selected.type}</div>
                <div>ID: {chart.selected.id}</div>
                <br/>
                {/*
                  We can re-use the onDeleteKey action. This will delete whatever is selected.
                  Otherwise, we have access to the state here so we can do whatever we want.
                */}
                <Button onClick={() => stateActions.onDeleteKey({})}>Delete</Button>
              </Message>
            : <Message>Click on a Node, Port or Link</Message> 
            }

            <ScriptDisplay chart={chart}/>
          </Sidebar>
        </Page>
      </div>
    )
  }
}
