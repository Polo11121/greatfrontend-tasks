import submitForm from "./submitForm";

export const ContactFormSolution = () => (
  <form
    onSubmit={submitForm}
    action="https://www.greatfrontend.com/api/questions/contact-form"
    method="post"
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      width: "300px",
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        style={{
          resize: "none",
        }}
      />
    </div>
    <button type="submit">Send</button>
  </form>
);
