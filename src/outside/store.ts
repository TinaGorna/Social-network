import React from 'react'

// import { v1 } from 'uuid'
// import profileReducer, { ProfilePagePropsType, AddPostActionType, UpdatePostActionType } from './profile-reducer'
// import dialogsReducer, { DialogsPagePropsType, SendMessageActionType, UpdateMessageActionType } from './dialogs-reducer'
// import friendsReducer, { FollowActionType, FriendsPagePropsType, SetActionType, UnfollowActionType } from './friends-reducer'

// export type ActionsType =
// AddPostActionType
// | UpdatePostActionType
// | SendMessageActionType
// | UpdateMessageActionType
// | FollowActionType
// | UnfollowActionType
// | SetActionType

// export type RootStateType = {
//   profilePage: ProfilePagePropsType
//   dialogsPage: DialogsPagePropsType
//   friendsPage: FriendsPagePropsType
// }

// export type StorePropsType = {
//   _state: RootStateType
//   _callSubscriber: () => void
//   getState: () => RootStateType
//   subscribe: (observer: () => void) => void
//   dispatch: (action: ActionsType) => void
// }

// const store: StorePropsType = {
//   _state: {
//     profilePage: {
//       profile: {
//         avatar: 'https://upload.wikimedia.org/wikipedia/ru/thumb/7/77/Richard_Madden_as_Robb_Stark.jpg/274px-Richard_Madden_as_Robb_Stark.jpg',
//         name: 'Robiert Stark',
//         location: 'Minsk, Belarus',
//         status: 'Staradaŭniaj Litoŭskaj Pahoni nia raźbić, nie spynić, nia strymać',
//         about: 'Kachaju svaju krainu'
//       },
//       newPostText: '',
//       posts: [
//         { id: v1(), message: 'Siabry, planuju sustreču z vami. Napišycie mnie)', likesCount: 12 },
//         { id: v1(), message: "Siabry, zaprašaju ŭsich na kancert siaredniaviečnaj muzyki", likesCount: 11 }
//       ]
//     },
//     dialogsPage: {
//       newMessageText: '',
//       messages: [
//         { id: v1(), message: 'Pryvitannie!' },
//         { id: v1(), message: 'Jak tvaje spravy?' },
//         { id: v1(), message: 'Au, adkažy)' },
//         { id: v1(), message: 'Usio vydatna) Jak ty?' },
//         { id: v1(), message: 'Taksama ŭsio dobra)' }
//       ],
//       dialogs: [
//         { id: v1(), name: 'Hanna', avatar: 'https://i.pinimg.com/originals/a4/04/71/a40471885a948612dcf92936141d98da.jpg' },
//         { id: v1(), name: 'Paŭlinka', avatar: 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1539913/d9e7e7eee9a421b16fee678e8bbd92b9/960x540' },
//         { id: v1(), name: 'Diejnieris', avatar: 'https://avatarko.ru/img/kartinka/13/serial_Game_of_Thrones_Daenerys_12809.jpg' },
//         { id: v1(), name: 'Wujtek', avatar: 'https://avatarko.ru/img/kartinka/33/serial_Game_of_Thrones_32744.jpg' },
//         { id: v1(), name: 'Lech', avatar: 'https://avatarko.ru/img/kartinka/6/serial_Game_of_Thrones_5983.jpg' },
//         { id: v1(), name: 'Karol', avatar: 'https://pm1.narvii.com/7377/ec4eea9404ef6004a52cadac44ed1dc33c28e16br1-600-800v2_uhq.jpg' }
//       ]
//     },
//     friendsPage: {
//       friends: [
//         { id: v1(), followed: false, name: 'Hanna', location: 'Minsk, Belarus', status: 'Каб любіць Беларусь нашу мілую маму...', avatar: 'https://i.pinimg.com/originals/a4/04/71/a40471885a948612dcf92936141d98da.jpg' },
//         { id: v1(), followed: true, name: 'Paŭlinka', location: 'Harodnia, Belarus', status: 'Valasy doŭhija, a rozum karotki', avatar: 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1539913/d9e7e7eee9a421b16fee678e8bbd92b9/960x540' },
//         { id: v1(), followed: false, name: 'Diejnieris', location: 'Poznań, Poĺšča', status: 'Zima nadchodzi', avatar: 'https://avatarko.ru/img/kartinka/13/serial_Game_of_Thrones_Daenerys_12809.jpg' },
//       ],
//     }
//   },

//   _callSubscriber() {
//     console.log('State changed')
//   },

//   getState() {
//     return this._state
//   },

//   subscribe(observer: () => void) {
//     this._callSubscriber = observer // паттерн observer наблюдатель // piblisher-subscriber// addEventListener// обработчик события onChange
//   },

//   dispatch(action) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action)
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//     this._state.friendsPage = friendsReducer(this._state.friendsPage, action)

//     this._callSubscriber();
//   }
// }

// export default store;

// store - OOP