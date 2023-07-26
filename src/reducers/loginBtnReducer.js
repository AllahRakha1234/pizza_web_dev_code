
const initalState = false;
const ChangeLoginBtnBoolValue = (state = initalState, action) => {
    switch (action.type) {
        case ("BOOLTRUE"): return true;
        case ("BOOLFALSE"): return false;
        default: return state;
    }
}

export default ChangeLoginBtnBoolValue;