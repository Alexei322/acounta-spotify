import {Router} from 'express';
import { protectRoute } from '../middleware/auth.middleware';

const router = Router();

//only performs the function if protectRoute is True, next() called in protectRoute
router.get("/like", protectRoute, (req, res ) => {
    req.auth.userId
    res.send("user route with GET method")
})

export default router;
