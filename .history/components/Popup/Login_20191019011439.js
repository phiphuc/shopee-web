import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';


const Login = (props) =>{
    const [state, setState] = useState({username, password});


    return (
        <Modal show={props.show} onHide={props.handleClose} animation={false}>
            <ModalHeader closeButton>Đăng nhập</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        {_.isEmpty(dataLogin) ?
                            <>
                                <Input value={username} onChange={(e) => changeValue(e)} type="text" name="username" id="username" placeholder="Số điện thoại" />
                                <Input value={password} onChange={(e) => changeValue(e)} type="password" name="password" style={{ marginTop: '1em' }} id="password" placeholder="Mật khẩu" />
                            </>
                            : <Input value={otp} onChange={(e) => changeValue(e)} type="text" name="otp" id="otp" placeholder="otp" />
                        }

                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                {_.isEmpty(dataLogin) ?
                    <><Button type="button" onClick={() => props.getOtp({ username: username, password: password, shopId: data.id })} className="btn btn-solid-primary btn--s btn--inline" >Đăng nhập</Button></>
                    : <><Button type="button" onClick={() => props.getLogin({ otp: otp })} className="btn btn-solid-primary btn--s btn--inline" >Đăng nhập</Button></>
                }
            </ModalFooter>
        </Modal>
    )
}

export default Login