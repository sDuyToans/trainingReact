
const stateDefault = {
    commentInfo : {
        name: '',
        content: ''
    },
    arrComment: [
        {name: 'Nguyễn Văn A', content: 'like like like'},
        {name: 'Trần Thị B', content: 'Like like like'},
        {name: 'LÊ Thị C', content: 'Like Like like'},
    ]
}

export const commentReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'HANDLE_CHANGE': {
            //B1: Lấy ra dữ liệu action gửi lên
            const { id, value } = action.payload;
            //B2: Đối với state là object hoặc array
            // => clone array ra
            let commetInfoUpdate = {...state.commentInfo};
            //B3: thay đổi state
            commetInfoUpdate[id] = value;
            //B4: Gán state cũ = state update
            state.commentInfo = commetInfoUpdate;
            return {...state}; //imutable
        }
        default:
            return state;
    }
}