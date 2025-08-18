import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client
      return session;
    },
    async signIn({ account, profile }) {
      if (account?.provider === "google") {
        return true;
      }
      return true;
    },
  },
  pages: {
    signIn: "/onboarding",
  },
});

export { handler as GET, handler as POST };