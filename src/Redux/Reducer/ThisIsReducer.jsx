const count = {
    value: 0,
}

const ThisIsReducer = (state = count, action) => {
    switch (action.type) {
        case "tambah_count":
            return {
                ...state,
                value: state.value + 1
            }
        case "kurang_count":
            return {
                ...state,
                value: state.value === 0 ? state.value - 0 : state.value - 1
            }


        default:
            return state;
    }
}

export default ThisIsReducer;