import React, {useState, useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';


const Login = (props) => {
    const [state, setState] = useState({ username: null, password:null, otp:null, dataLogin: props.dataLogin, data: props.data  });
    useEffect(() => {
        // setState({
        //     dataLogin: props.dataLogin
        // })
      });
      
    const changeValue = (e) => {
        setState({
            username: 'username' === e.currentTarget.id ? e.target.value : state.username,
            password: 'password' === e.currentTarget.id ? e.target.value : state.password,
            otp: 'otp' === e.currentTarget.id ? e.target.value : state.otp
        })

    }

    return (
        // <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        //                 <ModalHeader toggle={this.toggle}>Đăng nhập</ModalHeader>
        <Modal isOpen={props.show} toggle={props.onHide} animation={true}>
            <ModalHeader toggle={props.onHide}>Đăng nhập</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        {_.isEmpty(state.dataLogin) ?
                            <>
                                <Input  onChange={(e) => changeValue(e)} type="text" name="username" id="username" placeholder="Số điện thoại" />
                                <Input  onChange={(e) => changeValue(e)} type="password" name="password" style={{ marginTop: '1em' }} id="password" placeholder="Mật khẩu" />
                            </>
                            : <Input  onChange={(e) => changeValue(e)} type="text" name="otp" id="otp" placeholder="otp" />
                        }

                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                {_.isEmpty(state.dataLogin) ?
                    <><Button type="button" onClick={() => props.getOtp({ username: username, password: password, shopId: data.id })} className="btn btn-solid-primary btn--s btn--inline" >Đăng nhập</Button></>
                    : <><Button type="button" onClick={() => props.getLogin({ otp: otp })} className="btn btn-solid-primary btn--s btn--inline" >Đăng nhập</Button></>
                }
            </ModalFooter>
        </Modal>
    )
}

export default Login