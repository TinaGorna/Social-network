import React from "react";
import s from "./Post.module.css";

type PostPropsType = {
    message: string
    likesCount: number
}

const Post: React.FC<PostPropsType> = (props) => {
    return (
        <div className={s.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeAkhY97Ns1MJz1viAVK1kbWHOym5BVsNrMw&usqp=CAU" alt="ava"/>
            {props.message}

        </div>
    )
}

export default Post;