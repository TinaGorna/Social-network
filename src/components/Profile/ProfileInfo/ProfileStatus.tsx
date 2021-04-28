import React, { ChangeEvent } from 'react';
import styles from './ProfileInfo.module.css';

type ProfileStatusPropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

type ProfileStatusStateType = {
    editMode: boolean
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        console.log('this', this)
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: ProfileStatusPropsType, prevState: ProfileStatusStateType) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div className={styles.profileInfoStatus}>
                <div className={styles.title}>
                    Add a note...
                </div>
                {!this.state.editMode &&
                <div >
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || 'Add a note...'}</span>
                </div>
                }
                {this.state.editMode &&
                <div >
                    <input autoFocus={true} value={this.state.status} onBlur={this.deactivateEditMode} onChange={this.onStatusChange}> </input>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;