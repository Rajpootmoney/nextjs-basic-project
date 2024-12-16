// import { NextResponse } from "next/server";
// import { prisma } from "@/prisma/client";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// // POST: Handle login
// export async function POST(request: Request) {
//   try {
//     const { email, password } = await request.json();

//     // Validate input
//     if (!email || !password) {
//       return NextResponse.json({ message: "Email and password are required" }, { status: 400 });
//     }

//     // Find user in the database
//     const user = await prisma.user.findUnique({ where: { email } });

//     if (!user || !(await bcrypt.compare(password, user.password))) {
//       return NextResponse.json({ message: "Invalid email or password" }, { status: 401 });
//     }

//     // Generate JWT token
//     const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET!, {
//       expiresIn: "1h",
//     });

//     // Send the token as a response
//     return NextResponse.json({ token });
//   } catch (error) {
//     console.error("Login error:", error);
//     return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
//   }
// }
