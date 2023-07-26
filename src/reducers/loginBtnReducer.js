
const initalState = 0;
const ChangeLoginBtnBoolValue = (state = initalState, action) => {
    switch (action.type) {
        case ("BOOLTRUE"): return 1;
        case ("BOOLFALSE"): return 0;
        default: return state;
    }
}

export default ChangeLoginBtnBoolValue;