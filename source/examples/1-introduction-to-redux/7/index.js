import { store } from './store';
// import { delay } from '../../../../helpers';

/* 1 */
console.log('→ store:', store);

/* 2 */
// console.log('→ store.getState():', store.getState());

/* 3 */
// const subscription = () => console.log('→ 🚀');
// const unsubscribe = store.subscribe(subscription);

// (async () => {
//     console.log('→ state:', store.getState());
//     await delay(2000);
//     store.dispatch({
//         type:    'REMOVE_POST',
//         payload: '123',
//     });
//     console.log('→ state:', store.getState());
//     await delay(2000);
//     store.dispatch({
//         type:    'CREATE_POST',
//         payload: { id: '789', message: '🤷🏼‍♀️' },
//     });
//     console.log('→ state:', store.getState());
//     unsubscribe();
//     await delay(2000);
//     store.dispatch({
//         type:    'REMOVE_POST',
//         payload: '456',
//     });
//     console.log('→ state:', store.getState());
// })();
