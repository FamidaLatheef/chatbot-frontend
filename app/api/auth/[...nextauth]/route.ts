import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Simple example: accepts one user, replace with your own DB logic
        if (
          credentials?.email === "user@example.com" &&
          credentials?.password === "password"
        ) {
          return { id: "1", name: "User", email: "user@example.com" };
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

// Export handler in App Router format (GET & POST)
export { handler as GET, handler as POST };
