import express from 'express'
const router = express.Router()
import { 
    getProducts,
    getProductById,
    deleteProduct,
    createProduct,
    updateProduct,
    createProductReview,
    getTopProducts
} from '../controllers/productControllers.js'   
import { protect, admin } from '../middleware/authMiddleware.js'


router.route('/').get(getProducts).post(protect, admin, createProduct)
router.route('/:id/reviews').post(protect, createProductReview)
router.get('/top', getTopProducts)
router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct)
                    .put(protect, admin, updateProduct  )

    
export default router




// import express from 'express'
// const router = express.Router()
// import { getProducts, getProductById } from '../controllers/productControllers.js'

// router.route('/').get(getProducts)
// router.route('/:id').get(getProductById)

// export default router