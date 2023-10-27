import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Tech() {
  return (
    <>
      <div className="">
        <h1
          className=" h-32 flex items-center justify-center text-4xl font-medium  p-20"
          id="tech"
        >
          Technologies
        </h1>
      </div>
      <div className="w-64  mx-auto ">
        <img src="./img/robot.png" alt="" className="pb-5 dark:invert" />
      </div>
      <div className=" grid md:grid-cols-3 sm:grid-cols-2 gap-4 justify-items-center mx-auto max-w-5xl  ">
        <Card className=" ">
          <CardHeader>
            <CardTitle>JavaScript</CardTitle>
            <CardDescription>
              Built my knowledge on the language from ground up following ES6+
              concepts. Studied both in OOP and Functional paradigms.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="">
          <CardHeader>
            <CardTitle>React</CardTitle>
            <CardDescription>
              Built my knowledge on the language from ground up following ES6+
              concepts. Studied both in OOP and Functional paradigms.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="">
          <CardHeader>
            <CardTitle>Typescript</CardTitle>
            <CardDescription>
              Imagine JavaScript as a toolbox with incredible flexibility, but
              sometimes, it's like building without a blueprint. TypeScript is
              like having that blueprint. It adds type checking, helping us
              avoid mistakes, catch errors early
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="">
          <CardHeader>
            <CardTitle>nodeJS</CardTitle>
            <CardDescription>
              Built my knowledge on the language from ground up following ES6+
              concepts. Studied both in OOP and Functional paradigms.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="">
          <CardHeader>
            <CardTitle>MongoDB</CardTitle>
            <CardDescription>
              Built my knowledge on the language from ground up following ES6+
              concepts. Studied both in OOP and Functional paradigms.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="">
          <CardHeader>
            <CardTitle>tailwindcss</CardTitle>
            <CardDescription>
              Tailwind CSS is incredibly cool and one of my favorites.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card />
      </div>
    </>
  );
}

export default Tech;
