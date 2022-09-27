import './index.less'
import React, { Fragment, useEffect, useState } from 'react'
import { useModel, history, } from 'umi'
import { Table, Button, message } from 'antd'
import useResize from '@/hooks/useResize'

const Realtime: React.FC = () => {

  return (
    <div className="page-realtime">
      <div className="panel">
        <iframe
          src={localStorage.getItem("ipUrl-ym") || "http://localhost:8000/#/dataStatistics?iframe"}
          frameBorder="0"
          name="压铆"
          className='panel-iframe'
        />
      </div>
      <div className="panel">
        <iframe
          src={localStorage.getItem("ipUrl-xd") || "http://localhost:8000/#/dataStatistics?iframe"}
          frameBorder="0"
          name="箱底"
          className='panel-iframe'
        />
      </div>
      <div className="panel">
        <iframe
          src={localStorage.getItem("ipUrl-jbt") || "http://localhost:8000/#/dataStatistics?iframe"}
          frameBorder="0"
          name="搅拌桶"
          className='panel-iframe'
        />
      </div>
      <div className="panel">
        <iframe
          src={localStorage.getItem("ipUrl-tbg") || "http://localhost:8000/#/dataStatistics?iframe"}
          frameBorder="0"
          name="拖泵管"
          className='panel-iframe'
        />
      </div>
    </div>
  )
}

export default Realtime
