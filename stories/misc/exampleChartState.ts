import { IChart } from '../../src'

export const nodeInfo = {
  ci_whatisit_preexisting_11:{
    dialog:"You have a pre existing",
    clip:"ci_whatisit_preexisting",
    playbarPercentage:0.1
  },
  ci_2:{
    dialog:"this is ci_2",
    clip:"ci_2",
    playbarPercentage:0.2
  },
  ci_3:{
    dialog:"this is ci_3",
    clip:"ci_3",
    playbarPercentage:0.3
  }
}


export const chartSimple: IChart = {
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
