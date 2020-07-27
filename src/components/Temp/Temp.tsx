import * as React from 'react'
import {IChart} from '../../types'

export interface TempProps {
  chart: IChart
}

export const Temp = (props: TempProps) => {

  const {chart }= props;



  return (
    <div>num links:
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
  )
}


//        console.log('chart.links[item]')
//        console.log(chart.links[item])

