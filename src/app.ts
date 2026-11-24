import express from "express";
import cors from "cors";
import { z } from "zod";

const app = express();
app.use(cors());
app.use(express.json());

const users = [{ id: "u_001", name: "Demo User", email: "demo@example.com", role: "admin" }];

app.get("/health", (_req, res) => res.json({ status: "ok", service: "nodejs-enterprise-api" }));
app.get("/api/v1/users", (_req, res) => res.json({ data: users }));

const createUserSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  role: z.enum(["admin", "member"]).default("member")
});

app.post("/api/v1/users", (req, res) => {
  const parsed = createUserSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "Validation failed", details: parsed.error.flatten() });
  const user = { id: `u_${Date.now()}`, ...parsed.data };
  users.push(user);
  return res.status(201).json({ data: user });
});

app.use((_req, res) => res.status(404).json({ error: "Route not found" }));
export default app;
