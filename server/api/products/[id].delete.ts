import ProductModel from "~~/server/models/Product.model"

export default defineEventHandler(async(e)=>{


 // get id from params
 const id = e.context.params.id;
// update book
try{
    await ProductModel.findByIdAndDelete(id)
    return {
        status:200,
        products:'product deleted successfully'
       }
} catch (error) {
    console.log(error);
    return error
}

})