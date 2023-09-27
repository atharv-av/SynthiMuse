import Link from "next/link";
import { Button } from "@/components/ui/button";

const LandingPage = () => {
  return (
    <div>
      Landing Page (unprotected)
      <Button>
        <Link href="/sign-up">Sign Up</Link>
      </Button>
      <Button>
        <Link href="/sign-in">Sign In</Link>
      </Button>
    </div>
  );
};

export default LandingPage;
