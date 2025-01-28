"use server";

import { z } from "zod";
import { createSession, deleteSession } from "../session/session";
import { redirect } from "next/navigation";
import axios from "axios";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).trim(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .trim(),
});


async function fetchUser() {
  try {
    const response = await axios.get("https://run.mocky.io/v3/95939920-8185-4aae-b5da-24bd62ce0b3e");
    return response.data; 
  } catch (error) {
    console.error("Error fetching user from API:", error);
    throw new Error("Could not fetch user from API.");
  }
}

export async function login(prevState: any, formData: FormData) {
  const result = loginSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { email, password } = result.data;

  const user = await fetchUser();

  if (email !== user.email || password !== user.password) {
    return {
      errors: {
        email: ["Invalid email or password"],
      },
    };
  }

  await createSession(user.id);
  redirect("/");
}

export async function logout() {
  await deleteSession();
  redirect("/login");
}
