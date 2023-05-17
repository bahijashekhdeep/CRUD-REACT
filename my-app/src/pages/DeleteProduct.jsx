import "./../App.css";
import axios from "axios";

function DeleteProduct(id) {
  axios
    .delete(
      `http://localhost:3000/products/${id}`,

      {
        headers: {
          Authorization: localStorage.getItem("accessToken"), // Correct the header field name
        },
      }
    )
    .then((res) => {
      if (res.status === 200) {
        window.location.reload();
        alert("Are you sure you want to delete it!");
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

export default DeleteProduct;
