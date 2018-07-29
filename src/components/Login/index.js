import React, { Component } from 'react'

import { Form, Icon, Input, Button, Checkbox } from 'antd';

import './Login.css';

const FormItem = Form.Item;

class Login extends Component {
  constructor(props) {
    super(props);
    this.validateCustomlength = this.validateCustomlength.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  validateCustomlength(rule, value, callback) {
    if (value.length > 10) {
      callback("El nombre de usuario excede los límites");
    } else {
      callback();
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="Login">
        <div className="Login-pic">
          <img src="https://cdn3.iconfinder.com/data/icons/internet-and-web-4/78/internt_web_technology-13-512.png" />
        </div>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Este campo es requerido' }, { validator: this.validateCustomlength }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Usuario" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Este campo es requerido' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Contraseña" />
            )}
          </FormItem>
          <FormItem>
            <div className="login-form-remember">
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>Recordarme</Checkbox>
              )}
              <a className="login-form-forgot" href="">Olvidé mi contraseña</a>
            </div>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Iniciar Sesión
            </Button>
            O <a href="">Registrarse</a>
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default Login = Form.create()(Login);
