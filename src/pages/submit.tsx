import React, { useEffect, useState } from "react";
import styles from "./../../styles/FormSubmit.module.css";

import { client } from "../client";

export interface FormData {
  name: string;
  email: string;
  topic: string;
}

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState<string | undefined>();
  const [submitContactFormCF, { data, error, isLoading }] = client.useMutation(
    (mutation, args: FormData) => {
      console.log("mutation event");
      console.log("args", args);
      const { successMessage, name, errors } = mutation.submitContactFormCF({
        input: args,
      });

      return {
        successMessage,
        errors,
      };
    }
  );

  const errorMessage = error?.message;

  const SubmitForm = async (event) => {
    event.preventDefault();

    console.log("submit form event");

    submitContactFormCF({
      args: { name, email, topic },
    }).catch(console.error);
  };

  useEffect(() => {
    console.log(data);

    if (data?.errors?.length) {
      // show error message
      setMessage("There was an error in the form submission");
      return;
    }

    setMessage(data?.successMessage);
    setName("");
    setTopic("");
    setEmail("");
  }, [data]);

  return (
    <>
      <main>
        <div className={styles.container}>
          <h1 className={styles.h1}>
            Submit a Crag, Food Spot, Rock Gym or Pro Shop
          </h1>
          <div className="message">{message}</div>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="name">
                Name
              </label>
              <input
                className={styles.input}
                value={name}
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="email">
                Email
              </label>
              <input
                value={email}
                type="text"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="topic">
                Crag, Rock Gym, Pro Shop, Food Spot
              </label>
              <textarea
                className={styles.textarea}
                value={topic}
                name="topic"
                onChange={(e) => setTopic(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <button
                className={styles.button}
                disabled={isLoading}
                onClick={SubmitForm}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
