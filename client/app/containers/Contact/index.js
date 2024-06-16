/*
 *
 * Contact
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

import actions from '../../actions';

import Input from '../../components/Common/Input';
import Button from '../../components/Common/Button';

class Contact extends React.PureComponent {
  render() {
    const { contactFormData, contactFormChange, contactUs, formErrors } =
      this.props;

    const handleSubmit = event => {
      event.preventDefault();
      contactUs();
    };

    return (
      <div className='contact'>
        <h3 className='text-uppercase'>Контактная информация</h3>
        <hr />
        <form onSubmit={handleSubmit}>
          <Row>
            <Col xs='12' md='6'>
              <Input
                type={'text'}
                error={formErrors['name']}
                label={'Имя'}
                name={'name'}
                placeholder={'Ваше полное имя'}
                value={contactFormData.name}
                onInputChange={(name, value) => {
                  contactFormChange(name, value);
                }}
              />
            </Col>
            <Col xs='12' md='6'>
              <Input
                type={'text'}
                error={formErrors['email']}
                label={'Электронная почта'}
                name={'email'}
                placeholder={'Ваш email'}
                value={contactFormData.email}
                onInputChange={(name, value) => {
                  contactFormChange(name, value);
                }}
              />
            </Col>
            <Col xs='12' md='12'>
              <Input
                type={'textarea'}
                error={formErrors['message']}
                label={'Сообщение'}
                name={'message'}
                placeholder={'Пожалуйста, опишите ваше сообщение'}
                value={contactFormData.message}
                onInputChange={(name, value) => {
                  contactFormChange(name, value);
                }}
              />
            </Col>
          </Row>
          <hr />
          <div className='contact-actions'>
            <Button type='submit' text='Отправить' />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contactFormData: state.contact.contactFormData,
    formErrors: state.contact.formErrors
  };
};

export default connect(mapStateToProps, actions)(Contact);
