import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';


const Login = () =>{
    return (
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Đăng nhập</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        {_.isEmpty(dataLogin) ?
                            <>
                                <Input value={username} onChange={(e) => this.changeValue(e)} type="text" name="username" id="username" placeholder="Số điện thoại" />
                                <Input value={password} onChange={(e) => this.changeValue(e)} type="password" name="password" style={{ marginTop: '1em' }} id="password" placeholder="Mật khẩu" />
                            </>
                            : <Input value={otp} onChange={(e) => this.changeValue(e)} type="text" name="otp" id="otp" placeholder="otp" />
                        }

                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                {_.isEmpty(dataLogin) ?
                    <><button type="button" onClick={() => this.props.getOtp({ username: username, password: password, shopId: data.id })} className="btn btn-solid-primary btn--s btn--inline" >Đăng nhập</button></>
                    : <><button type="button" onClick={() => this.props.getLogin({ otp: otp })} className="btn btn-solid-primary btn--s btn--inline" >Đăng nhập</button></>
                }
            </ModalFooter>
        </Modal>
    )
}

export default Login