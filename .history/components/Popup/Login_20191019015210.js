import React, {useState, useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';


const Login = (props) => {
    const [state, setState] = useState({ username: null, password:null, otp:null, dataLogin: null });
    useEffect(() => {
        // setState({
        //     dataLogin: props.dataLogin
        // })
      });
      
    const changeValue = (e) => {
        setState({
            username: 'username' === e.currentTarget.id ? e.target.value : this.state.username,
            password: 'password' === e.currentTarget.id ? e.target.value : this.state.password,
            otp: 'otp' === e.currentTarget.id ? e.target.value : this.state.otp
        })

    }

    return (
        <Modal  show={props.show} onHide={props.handleClose} animation={true}>
            <Modal.Header closeButton>Đăng nhập</Modal.Header>
            <Modal.Body>
                <Form>
                    <FormGroup>
                        {_.isEmpty(state.dataLogin) ?
                            <>
                                <Input value={state.username} onChange={(e) => changeValue(e)} type="text" name="username" id="username" placeholder="Số điện thoại" />
                                <Input value={state.password} onChange={(e) => changeValue(e)} type="password" name="password" style={{ marginTop: '1em' }} id="password" placeholder="Mật khẩu" />
                            </>
                            : <Input value={state.otp} onChange={(e) => changeValue(e)} type="text" name="otp" id="otp" placeholder="otp" />
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