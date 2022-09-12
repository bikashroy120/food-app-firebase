import { getOrder } from "../../componets/FirebaseFuncation";
import { orderActions } from "./order-slice";


// check coupon 

 

export const factOrder = ()=>{
    return async (dispatch) => {
    await getOrder().then((data)=>{
        dispatch(orderActions.orderItems(data))
    })
    }
  }



// user order list
// export const orderlist = (address) => {
//   return async (dispatch) => {
//     async function getuserorderlist(e) {
//       dispatch(authActions.Loading("loading"));

//       axios
//         .get("/order/customer/view/")
//         .then((response) => {
//             dispatch(orderActions.adduserorderdata(response.data));
//             dispatch(authActions.Loading("idle"));
//         })
//         .catch((err) => {
//           console.log(err);
//           dispatch(authActions.Loading("error"));
//         });
//     }
//     getuserorderlist();
//   };
// };