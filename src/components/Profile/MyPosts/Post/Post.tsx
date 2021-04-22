import React from 'react';
import styles from './Post.module.css';

type PostPropsType = {
    id: string
    message: string
    time: string
    liked: boolean
    likesCount: number
    like: (postID: string) => void
    unlike: (postID: string) => void
}

const Post = (props: PostPropsType) => {

    return (
        <div className={styles.postItemWrapper}>
            <img src='https://upload.wikimedia.org/wikipedia/ru/thumb/7/77/Richard_Madden_as_Robb_Stark.jpg/274px-Richard_Madden_as_Robb_Stark.jpg' alt='post' />

            <div className={styles.postItem}>
                {props.message}

                <div className={styles.postLikeTimeWrapper}>
                    <div className={styles.postLike}>
                        {
                            props.liked
                                ? <button onClick={() => { props.unlike(props.id) }}>
                                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/342px-A_perfect_SVG_heart.svg.png' alt='like' style={{ width: '10px', height: '10px' }}/>
                                </button>
                                : <button onClick={() => props.like(props.id)}>
                                    <img src='https://www.clipartmax.com/png/middle/32-325427_heart-icon-svg-heart-png-transparent-background.png' alt='unlike' style={{ width: '10px', height: '10px' }} />
                                </button>
                        }
                        <span>{props.likesCount}</span>
                    </div>

                    <div className={styles.postTime}>
                        {props.time}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Post;