import profileReducer, {AddPostActionCreator, deletePost} from "./profile-reducer";
import {v1} from "uuid";

let state = {
    profile: {
        aboutMe: '',
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: ''
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: NaN,
        photos: {
            small: '',
            large: ''
        }
    },
    status: '',
    posts: [
        { id: v1(), message: 'Want to decorate the interior in purple shades? Not sure where to start?' +
                'Where to get the cheapest wallpaper? How to save on furniture?', time: '22:00', liked: true, likesCount: 12 },
        { id: v1(), message: 'Want to decorate the interior in purple shades? Not sure where to start?' +
                'Where to get the cheapest wallpaper? How to save on furniture?', time: '23:00', liked: false, likesCount: 11 }
    ]
}

test('new post length should be incremented', () => {      //done
    let action = AddPostActionCreator('it-kamasutra.com');
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
})

test('looking for a job should be false', () => {    //done
    let action = AddPostActionCreator('it-kamasutra.com');
    let newState = profileReducer(state, action);

    expect(newState.profile?.lookingForAJob).toBe(false);
})

test('length of messages after deleting should be decrement', () => {  //done
    let action = deletePost(state.posts[0].id);
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(1);
})

test('after deleting length should not be changed if id isn\'t correct', () => {   //done
    let action = deletePost('213');
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(2);
})
