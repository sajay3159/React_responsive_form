const FormSection = () => {
  return (
    <section className="form">
      <form>
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="Submit">Submit</button>
      </form>
    </section>
  );
};

export default FormSection;
