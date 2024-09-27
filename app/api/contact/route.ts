import { NextResponse, NextRequest } from "next/server";
import nodemailer, { Transporter } from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

// Handles POST requests to /api

export async function POST(request: NextRequest) {
  const formData: FormData = await request.formData();

  const transporter = getTransporter();
  return await sendMail(transporter, formData);
}

let username: string | undefined;
let password: string | undefined;
let myEmail = "fanoroiyanu@gmail.com";

const getTransporter = (): Transporter => {
  username = process.env.EMAIL;
  password = process.env.PASSWORD;
  console.log("email is ", username);
  console.log("password is", password);
  console.log("username=>>", username);
  const transporter_ = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 587,
    // tls: {
    //   ciphers: "SSLv3",
    //   rejectUnauthorized: false,
    // },
    // secure: true,
    requireTLS: true,
    auth: {
      user: username,
      pass: password,
    },
  });
  return transporter_;
};

const sendMail = async (transporter: Transporter, formData: FormData) => {
  const name = formData.get("name");
  const message = formData.get("message");
  const senderEmail = formData.get("email");
  const data = formData.values();

  try {
    // const mail =
    await transporter.sendMail({
      from: username,
      to: myEmail,
      replyTo: myEmail,
      subject: `Website activity from ${myEmail}`,
      html: `
            <p>Name: ${name} </p>
            <p> Sender Email : ${senderEmail} </p>
            <p>Message: ${message} </p>
            `,
    });
    console.log("success!!!");
    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.log(error);
    NextResponse.json(error, { status: 500 });
  }
};
