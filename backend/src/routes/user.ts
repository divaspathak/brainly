import { Router } from "express";
import userSchema from "../schema/userSchema";
import { userModel } from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { jwtPass } from "../config";

const userRouter = Router();

userRouter.get("/signin", async (req, res) => { });

userRouter.post("/signup", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const hashedPass = await bcrypt.hash(password, 10);

    const zodValidation = userSchema.safeParse({
        email: email,
        password: hashedPass,
    });
    if (!zodValidation.success) {
        res.json({
            message: "Invalid User Schema",
        });
        return;
    }

    const userData = await userModel.findOne({
        email: email,
    });

    if (userData) {
        res.status(409).json({
            message: "User already Present",
        });
        return
    }
    const user = await userModel.create({
        email: email,
        password: hashedPass,
    });
    const token = jwt.sign({ id: user._id }, jwtPass);
    res.json({
        message: "User Signed Up Successfully", 
        token: token,
    });
    return
});

export default userRouter;
