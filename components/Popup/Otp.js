import React, {useState, useEffect} from 'react';
import _ from 'lodash';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';


const Login = (props) => {
    const [state, setState] = useState({ username: null, password:null, otp:null, dataLogin: props.dataLogin, data: props.data  });
    useEffect(() => {
        setState({
            dataLogin: props.dataLogin,
            data: props.data
        })
      },[props]);
      
    const changeValue = (e) => {
        setState({
            username: 'username' === e.currentTarget.id ? e.target.value : state.username,
            password: 'password' === e.currentTarget.id ? e.target.value : state.password,
            otp: 'otp' === e.currentTarget.id ? e.target.value : state.otp,
            dataLogin: state.dataLogin,
            data: state.data
        })

    }

    return (
        <Modal isOpen={props.show} toggle={props.onHide} >
            <ModalHeader toggle={props.onHide}>Đăng nhập</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                                <Input  onChange={(e) => changeValue(e)} type="text" name="username" id="username" placeholder="Số điện thoại" />
                                <Input  onChange={(e) => changeValue(e)} type="password" name="password" style={{ marginTop: '1em' }} id="password" placeholder="Mật khẩu" />

                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                    <><Button type="button" onClick={() => props.getOtp({ username: state.username, password: state.password, shopId: state.data.id })} className="btn btn-solid-primary btn--s btn--inline" >Đăng nhập</Button></>
            </ModalFooter>
        </Modal>
    )
}

export default Login