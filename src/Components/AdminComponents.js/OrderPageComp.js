import React from "react";
import pizzaGredients from '../../assets/files/pizzaGredients';
export default function OrderPageComp() {

    const captalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };

    return (
        <>
            <div className="container mt-4">
                <table className="table col-lg-8">
                    <tbody>
                        <tr>
                            <th colSpan={12}>
                                <h2 className="d-flex justify-content-center">Orders Panel</h2>
                            </th>
                        </tr>
                        {
                            pizzaGredients.map((gradientObj) => {
                                return (
                                    <>
                                        <tr>
                                            <th colSpan={12}>
                                                <h3>{captalize(gradientObj.gradType)}</h3>
                                            </th>
                                        </tr>
                                        {
                                            gradientObj.options.map((option) => {
                                                return (
                                                    < tr key={option}  >
                                                        <td colSpan={8}><h5 style={{ lineHeight: "20px" }}>{option}</h5></td>
                                                        <td className="text-center mt-3" colSpan={2}>6</td>
                                                        <td className="text-center" colSpan={2}>
                                                            <button className="updateBtn btn btn-primary">
                                                                Update
                                                            </button>
                                                        </td>
                                                    </ tr>
                                                )
                                            }
                                            )
                                        }
                                    </>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div >
        </>
    );
}

