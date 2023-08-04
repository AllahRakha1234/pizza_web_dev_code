
import axios from "axios";

export const setLoginBtnBoolValue = () => {
    return {
        type: "BOOLLOGIN"
    }
};

export const setSignUpBtnBoolValue = () => {
    return {
        type: "BOOLSIGNUP"
    }
};

export const showLoginOrLogoutBtnAction = () => {
    return {
        type: "SHOW_LOGOUT_OR_LOGIN"
    }
}

export const addToCartAction = (pizza, quantity, variant) => (dispatch, getState) => {
    if (quantity > 10) {
        alert("Can't Select More Than 10 Pizzas 🍕 In One Order.")
    }
    else if (quantity < 1) {
        alert("Quantity Of Pizza 🍕 Can't Be Lower Than 1.")
    }
    else {
        var cartItem = {
            name: pizza.name,
            _id: pizza._id,
            image: pizza.image,
            prices: pizza.prices,
            variant: variant,
            quantity: quantity,
            price: pizza.prices[0][variant] * quantity
        }
        dispatch({ type: "ADD_TO_CART", payload: cartItem });
        localStorage.setItem("cartItems", JSON.stringify(getState().addToCartReducer.cartItems))
    }
}

export const deleteFromCart = (pizza) => (dispatch, getState) => {
    dispatch({
        type: "DELETE_FROM_CART",
        payload: pizza
    })
    localStorage.setItem("cartItems", JSON.stringify(getState().addToCartReducer.cartItems));
}

// ******** SERVER RELATED ACTIONS ************

export const signupUserAction = (user) => async (dispatch) => {
    dispatch({ type: "REGISTER_USER_REQUEST" });
    try {
        const res = await axios.post("http://localhost:8080/signup", user);
        dispatch({ type: "REGISTER_USER_SUCCESS", payload: res.data });
        console.log(res.data);
    } catch (error) {
        dispatch({ type: "REGISTER_USER_FAIL", payload: error });
    }
}

export const loginUserAction = (user) => async (dispatch, getState) => {
    dispatch({ type: "LOGIN_USER_REQUEST" });
    try {
        const res = await axios.post("http://localhost:8080/login", user);
        dispatch({ type: "LOGIN_USER_SUCCESS", payload: res.data });
        if (res.data.msg === "Exist") {
            localStorage.setItem("currentUser", JSON.stringify(user));
            // dispatch({ type: "SHOW_LOGOUT_OR_LOGIN" });
            // dispatch(setLoginBtnBoolValue());
            // dispatch(showLoginOrLogoutBtnAction());
            window.location.href = "/dashboard";
        }
        else if (res.data.msg === "NotExist") {
            alert("Email 📩 or Password 🔑 is Incorrect !");
        }
        console.log(res.data);
    } catch (error) {
        dispatch({ type: "LOGIN_USER_FAIL", payload: error });
    }

}

export const getAllPizzasAction = () => async (dispatch) => {
    dispatch({
        type: "GET_ALL_PIZZAS_REQUEST"
    })
    try {
        const res = await axios.get("http://localhost:8080/api/pizzas/getAllPizzas");
        dispatch({ type: "GET_ALL_PIZZAS_SUCCESS", payload: res.data })
    } catch (error) {
        dispatch({ type: "GET_ALL_PIZZAS_FAIL", payload: error })
    }
}

export const getPizzaGradientsAction = () => async (dispatch) => {
    dispatch({
        type: "GET_ALL_PIZZAS_GRAD_REQUEST"
    })
    try {
        const res = await axios.get("http://localhost:8080/api/pizzas/getAllPizzaGradients");
        dispatch({ type: "GET_ALL_PIZZAS_GRAD_SUCCESS", payload: res.data })
    } catch (error) {
        dispatch({ type: "GET_ALL_PIZZAS_GRAD_FAIL", payload: error })
    }
}

// const getPizzaGrad = async () => {
//     try {
//         const res = await axios.get("http://localhost:8080/api/pizzas/getAllPizzaGradients");
//         const data = res.data;
//         console.log("Data: ", data);
//         return data;

//     } catch (error) {
//         return error;
//     }
// }

// export const getPizzaGradientsAction = () => {
//     return {
//         type: "GET_ALL_PIZZA_GRADIENTS",
//         payload: getPizzaGrad()
//     }
// }