import { FormEvent } from "react";

export async function send_email(event: any) {
  event.preventDefault();
  const formData = new FormData(event.target);
  try {
    const response = await fetch("/api/contact", {
      method: "post",
      body: formData,
    });
    console.log("response=>>", response);

    if (!response.ok) {
      console.log("falling over");
      throw new Error(`response status: ${response.status}`);
    }
    const responseData = await response.json();
    console.log(responseData["message"]);

    console.log("Message successfully sent");
  } catch (err) {
    console.error(err);
    console.log("Error, please try resubmitting the form");
  }
}
