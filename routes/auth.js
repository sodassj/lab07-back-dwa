const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../models/User");

// Registro
router.post("/register", async (req, res) => {
  console.log("📥 Se recibió una solicitud POST en /register");
  try {
    const { username, password, role } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Usuario ya existe" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword, role });

    await newUser.save();

    // Envío opcional para saber que funcionó
    res.json({ success: true, message: "Usuario registrado con éxito" });

  } catch (error) {
    console.error("❌ Error al registrar usuario:");
    console.error("Mensaje:", error.message);
    console.error("Stack:", error.stack);
    res.status(500).json({ message: "Error interno del servidor" });
}
});

// Login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(400).json({ message: "Usuario no encontrado" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).json({ message: "Contraseña incorrecta" });

  const token = jwt.sign(
    { username: user.username, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token, username: user.username, role: user.role });
});

module.exports = router;
