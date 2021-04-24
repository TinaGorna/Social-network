import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'

import { AddMessagePropsType } from '../Dialogs'
import styles from './AddMessageForm.module.css';
import {Textarea} from "../../Common/FormsControls/FormControl";
import {maxLengthCreator, required} from "../../../utils/validators/validatos";


const maxLengthCreator500 = maxLengthCreator(500)

const AddMessageForm: React.FC<InjectedFormProps<AddMessagePropsType>> = ({ handleSubmit }) => {
    return (
        <form className={styles.sendMessage} onSubmit={handleSubmit}>
            <div className={styles.sendMessageText}>
                <Field
                    name='newMessageBody'
                    component={Textarea}
                    placeholder='Enter your message'
                    wrap='hard'
                    validate={[required, maxLengthCreator500]} />
            </div>
            <div className={styles.sendMessageBtn}>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm<AddMessagePropsType>({ form: 'dialogsAddMessageForm' })(AddMessageForm)

export default AddMessageReduxForm