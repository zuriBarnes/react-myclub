import LoginForm from "@/components/LoginForm";

export default function About() {
  let isLoggedIn = false;
  let content;
  if (isLoggedIn) {
    content = <h2>Welcome to the App</h2>;
  } else {
    content = <LoginForm />;
  }

  return <>{content}</>;
}
