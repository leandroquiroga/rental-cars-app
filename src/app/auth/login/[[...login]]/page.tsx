import { SignIn } from '@clerk/nextjs';

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center ">
      <SignIn routing="path" path="/auth/login" />
    </div>
  );
}