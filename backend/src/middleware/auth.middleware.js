import { clerkClient } from "@clerk/express";

export const protectRoute = async (req, res, next) => {
    if (!req.auth.userId) {
        return res.status(401).json({ message: "Unauthorised, you need to be logged in" });

    }

    next()
}

export const requireAdmin = async (req, res, next) => {
    try {
        const currentUser = await clerkClient.users.getUser(req.auth.userId);
        const isAdmin = process.env.ADMIN_EMAIL === currentUser.primaryEmailAddress.emailAddress;
        if (!isAdmin) {
            return res.status(403).json({ message: "Unauthorised - you need to be an admin" })
        }
        next();

    } catch (error) {
        return res.status(500).json({message: "Internal error"})
    }
}