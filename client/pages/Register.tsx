import Signup from "@/components/Signup";
import Login from "@/components/Login";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
export default function SignupPage() {
  return (
    <Layout>
      {" "}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container max-x-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="bg-gray-50 rounded-xl  hover:shadow-lg hover:border-primary border border-gray-200 transition-all duration-200 max-w-sm">
              <CardHeader>
                <CardTitle>Create an Account</CardTitle>
                <CardDescription>
                  Enter the details below to create a new account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Signup />
              </CardContent>
              <Button variant="outline" size="default">
                Log into existing account
              </Button>
            </Card>
            <Card className="bg-gray-50 rounded-xl p-8  hover:shadow-lg hover:border-primary border border-gray-200 transition-all duration-200 max-w-sm">
              <CardHeader>
                <CardTitle>Log into Existing Acount</CardTitle>
                <CardDescription>Enter your email and password</CardDescription>
              </CardHeader>
              <CardContent>
                <Login />
              </CardContent>
              <Button variant="outline" size="default" className="items-center">
                Register new account
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
