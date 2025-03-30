import { SignUp } from '@clerk/nextjs';

export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center">
      <SignUp routing="path" path="/auth/register" />
    </div>
  );
}