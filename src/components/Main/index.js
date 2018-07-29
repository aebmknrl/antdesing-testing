import React, { Component } from 'react'

import { Steps, Icon } from 'antd';

import './Main.css';

const Step = Steps.Step;

export default class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Steps>
          <Step status="finish" title="Iniciar Sesión" />
          <Step status="process" title="Pago" icon={<Icon type="loading" />} />
          <Step status="wait" title="Finalizar" />
        </Steps>
      </div>
    )
  }
}
