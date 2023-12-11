"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type FormSchema = z.infer<typeof formSchema>;

export default function Page() {
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: FormSchema) {
    const API = process.env.NEXT_PUBLIC_API_URL;
    console.log("Submitted!");
    try {
      const req = await fetch(`${API}/api/users`, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await req.json();

      if (req.status !== 200 && req.status !== 201) {
        const errorMessage =
          data.errors?.[0]?.data?.[0]?.message ?? "Please try again.";

        toast({
          variant: "destructive",
          title: "Oops, something went wrong!",
          description: errorMessage,
        });
        form.resetField("password");

        return;
      }
      console.log(req.status);
      toast({
        variant: "success",
        title: "Success!",
        description: data.message,
      });
      form.reset();
      router.push(`/verify-email?to=${values.email}`);
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Server Error!",
        description: "Please try again.",
      });
      console.log("Error", err);
    }
  }

  return (
    <main className="container flex flex-col items-center justify-center grow xl:px-0">
      <Card className="max-w-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription>
            Enter your email and new password below to register as a contributor
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="jane@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full" type="submit">
                Create Account
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </main>
  );
}
