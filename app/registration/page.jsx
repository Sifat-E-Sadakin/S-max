"use client";

import { useSetStudentMutation } from "../store/usersApiQuery";

const page = () => {
  const [setStudent, { data }] = useSetStudentMutation();

  console.log(data);
  const testSubmit = () => {
    setStudent({
      mobile_number: "01644997905",
      name: "Sifat E Sadakin",
      password: "softmax",
      password2: "softmax",
    });
  };
  return (
    <div>
      Registration
      <button onClick={() => testSubmit()}>test</button>
    </div>
  );
};

export default page;
