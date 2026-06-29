import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const COOKIE_NAME = "adminSession";
const SESSION_DURATION_SECONDS = 60 * 60 * 8; // 8 saat

function getSecret(): Uint8Array {
  const secret = process.env.SESSION_SECRET;
  if (!secret) {
    throw new Error(
      "SESSION_SECRET environment variable tanımlı değil. Vercel proje ayarlarında bir SESSION_SECRET ekleyin (en az 32 karakter, rastgele bir metin)."
    );
  }
  return new TextEncoder().encode(secret);
}

export async function createSession(kullaniciAdi: string): Promise<void> {
  const token = await new SignJWT({ kullaniciAdi })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_DURATION_SECONDS}s`)
    .sign(getSecret());

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_DURATION_SECONDS,
  });
}

export async function destroySession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export async function getSession(): Promise<{ kullaniciAdi: string } | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, getSecret());
    return { kullaniciAdi: payload.kullaniciAdi as string };
  } catch {
    return null;
  }
}

export async function requireSession(): Promise<{ kullaniciAdi: string }> {
  const session = await getSession();
  if (!session) {
    throw new Error("UNAUTHORIZED");
  }
  return session;
}
