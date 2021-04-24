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
            <img src='https://i.pinimg.com/564x/e8/42/55/e842551f1287148f65da67e35daf2a39.jpg' alt='post' />
            <div className={styles.postItem}>
                {props.message}
                <div className={styles.postLikeTimeWrapper}>
                   {/* <div className={styles.iphone}>
                    <img src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-purple-select-2021?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1617130317000'/>
                    </div>*/}
                    <div className={styles.postLike}>
                        {
                            props.liked
                                ? <button onClick={() => { props.unlike(props.id) }}>
                                    <img src='https://iconarchive.com/download/i102621/graphicloads/flat-finance/dislike.ico' alt='like' style={{ width: '20px', height: '20px' }} />
                                </button>
                                : <button onClick={() => props.like(props.id)}>
                                    <img src='https://cdn.worldvectorlogo.com/logos/facebook-like.svg' alt='dislike' style={{ width: '20px', height: '20px' }}/>
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