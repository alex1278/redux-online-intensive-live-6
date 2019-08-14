export const createPostButton = document.createElement('button');
export const removePostButton = document.createElement('button');
export const createPostAsyncButton = document.createElement('button');
export const prependReducerButton = document.createElement('button');
export const appendReducerButton = document.createElement('button');

createPostButton.innerText = '✅ Create post';
removePostButton.innerText = '❌ Remove post';
createPostAsyncButton.innerText = '⏳ Create post async';
prependReducerButton.innerText = '☝🏼 Prepend post';
appendReducerButton.innerText = '👇🏼 Append post';

const target = document.createElement('section');
target.setAttribute('class', 'example');
document.getElementById('app').appendChild(target);

export const render = (store, mode) => {
    const drawButtons = (mode) => {
        switch (mode) {
            case 'create': {
                target.appendChild(createPostButton);
                break;
            }

            case 'normal': {
                target.appendChild(createPostButton);
                target.appendChild(removePostButton);
                break;
            }

            case 'async': {
                target.appendChild(createPostButton);
                target.appendChild(removePostButton);
                target.appendChild(createPostAsyncButton);
                break;
            }

            case 'replaceReducer': {
                target.appendChild(prependReducerButton);
                target.appendChild(appendReducerButton);
                break;
            }

            default:
                return false;
        }
    };

    drawButtons(mode);

    // Initialize list
    target.appendChild(document.createElement('ul'));

    return () => {
        const oldList = document.querySelector('ul');
        const newList = document.createElement('ul');

        for (const { comment } of store.getState()) {
            const item = document.createElement('li');

            item.innerText = comment;
            newList.appendChild(item);
        }

        target.replaceChild(newList, oldList);
    };
};
