import { User } from "../models";
import { generateToken } from "../config/token";
import { IPayload } from "../interfaces/IPayload";
import { IUser } from "../interfaces/IUser";
import nodemailer, { Transporter } from "nodemailer";

export async function createUser(userData: IUser) {
  try {
    const newUser = await User.create(userData);
    return newUser;
  } catch (error: any) {
    throw new Error("Failed to create user");
  }
}

export async function authenticateUser(email: string, password: string) {
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw new Error("Invalid credentials");
    }

    const isValid = await user.validatePassword(password);
    if (!isValid) {
      throw new Error("Unauthorized");
    }

    const payload: IPayload = {
      email: user.email,
      password: user.password,
      isAdmin: user.isAdmin
    };

    const token = generateToken(payload);

    return { token, user };
  } catch (error) {
    throw new Error("Internal Server Error");
  }
}

export async function updateUser(
  userId: string,
  userData: IUser,
  userBody: any
) {
  try {
    const user = await User.findOne({ where: { email: userData.email } });
    if (String(user?.dataValues?.id) === userId || userData.isAdmin) {
      const [_, [editedUser]] = await User.update(userBody, {
        where: { id: userId },
        returning: true,
        individualHooks: true
      });
      console.log(_);
      if (!editedUser) {
        throw new Error("Invalid credentials");
      }
      return editedUser;
    }
  } catch (error) {
    throw new Error("Internal Server Error");
  }
}

export async function deleteOneUser(userId: string) {
  try {
    const deletedUser = await User.destroy({
      where: { id: userId }
    });

    if (!deletedUser) {
      throw new Error("Invalid credentials");
    }

    return "User deleted";
  } catch (error) {
    throw new Error("Internal Server Error");
  }
}

export async function getAllUsers() {
  try {
    const allUsers = await User.findAll({
      where: { isAdmin: false }
    });

    if (!allUsers || allUsers.length === 0) {
      throw new Error("No users found");
    }

    return allUsers;
  } catch (error) {
    throw new Error("Internal Server Error");
  }
}

export async function getAllActiveUsers() {
  try {
    const allActiveUsers = await User.findAll({
      where: { isAdmin: false, status: "active" }
    });

    if (!allActiveUsers) {
      throw new Error("Active users not found");
    }

    return allActiveUsers;
  } catch (error) {
    throw new Error("Internal Server Error");
  }
}

export async function viewDetails(userId: string) {
  try {
    const delivery = await User.findByPk(userId);
    return delivery;
  } catch (error) {
    throw new Error("Internal Server Error");
  }
}

export async function getUser(email: string) {
  try {
    const user = await User.findOne({ where: { email: email } });
    if (!user) {
      throw new Error("No user found");
    }
    return user; // Return the user object when found
  } catch (error) {
    throw new Error("Error getting user");
  }
}

export async function sendMail(email: string): Promise<string> {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new Error("User not found");
  }

  const payload: IPayload = {
    email: user.email,
    password: user.password,
    isAdmin: user.isAdmin
  };

  const token = generateToken(payload);

  const transporter: Transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Set to true if using a secure connection (e.g., SSL/TLS)
    auth: {
      user: process.env.GMAIL,
      pass: process.env.GMAILPASSWORD
    }
  });

  const mailOptions = {
    from: "fastdeliveryrecovery@gmail.com",
    to: email,
    subject: "Reestablecer Contraseña",
    text: `Hacé click en la siguiente liga para reestablecer tu contraseña https://front-git-develop-fast-delivery.vercel.app/cambiar?token=${token}`
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return info.response;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}
