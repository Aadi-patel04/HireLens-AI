const express = require("express")

const authRouter = express.Router();

const authController = require("../controllers/auth.controller")

const authMiddleware = require("../middlewares/auth.middleware")

const getMeController = require("../controllers/auth.controller").getMeController;


authRouter.post("/register",authController.userRegisterController);

authRouter.post("/login",authController.userLoginController);

authRouter.get("/logout",authController.userLogoutController);

authRouter.get("/get-me", authMiddleware.authUser,authController.getMeController);

module.exports = authRouter;

