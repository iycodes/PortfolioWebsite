import { FormEvent } from "react";

export async function send_email(event: any): Promise<Response> {
  event.preventDefault();
  const formData = new FormData(event.target);
  const response = await fetch("/api/contact", {
    method: "post",
    body: formData,
  });
  const responseData = await response.json();
  console.log("response=>>", responseData);
  return responseData;
  // try {
  //   const response = await fetch("/api/contact", {
  //     method: "post",
  //     body: formData,
  //   });
  //   console.log("response=>>", response);

  //   if (response.status != 200) {
  //     console.log("failing over");

  //   }
  //   const responseData = await response.json();
  //   console.log(responseData["message"]);

  //   console.log("Message successfully sent");
  // } catch (err) {
  //   console.error(err);
  //   console.log("Error, please try resubmitting the form");
  // }
}
